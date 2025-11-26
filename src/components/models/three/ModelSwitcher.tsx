import * as THREE from "three";
import type { FC, ComponentProps } from "react";
import { useRef, useMemo } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import MacbookModel16 from "../Macbook-16";
import MacbookModel14 from "../Macbook-14";

gsap.registerPlugin(useGSAP);

type ModelSwitcherProps = {
    scale: number;
    isMobile: boolean;
};

const animationDuration = 1;
const offsetDistance = 5;

const fadeMeshes = (
    group: THREE.Group | null | undefined,
    opacity: number
): void => {
    if (!group) return;

    group.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if ((mesh as any).isMesh) {
            const mat = mesh.material;
            if (Array.isArray(mat)) {
                mat.forEach((m) => {
                    if (!m) return;
                    m.transparent = true;
                    gsap.to(m, { opacity, duration: animationDuration });
                });
            } else if (mat) {
                mat.transparent = true;
                gsap.to(mat, { opacity, duration: animationDuration });
            }
        }
    });
};

const moveGroup = (
    group: THREE.Group | null | undefined,
    x: number
): void => {
    if (!group) return;
    gsap.to(group.position, { x, duration: animationDuration });
};

const ModelSwitcher: FC<ModelSwitcherProps> = ({ scale, isMobile }) => {
    const scaleLargeLaptops = 0.08;
    const scaleLargeMobile = 0.05;

    const smallMacbookRef = useRef<THREE.Group>(null);
    const largeMacbookRef = useRef<THREE.Group>(null);

    const showLargeMacbook =
        scale === scaleLargeLaptops || scale === scaleLargeMobile;

    // типізуємо пропси контролів від самого компонента
    type PCProps = ComponentProps<typeof PresentationControls>;
    const controlsConfig: Omit<PCProps, "children"> = useMemo(
        () => ({
            snap: true,
            speed: 1,
            zoom: 1,
            azimuth: [-Infinity, Infinity] as [number, number],
            config: { mass: 1, tension: 0, friction: 26 },
        }),
        []
    );

    useGSAP(
        () => {
            if (showLargeMacbook) {
                moveGroup(smallMacbookRef.current, -offsetDistance);
                moveGroup(largeMacbookRef.current, 0);

                fadeMeshes(smallMacbookRef.current, 0);
                fadeMeshes(largeMacbookRef.current, 1);
            } else {
                moveGroup(smallMacbookRef.current, 0);
                moveGroup(largeMacbookRef.current, offsetDistance);

                fadeMeshes(smallMacbookRef.current, 1);
                fadeMeshes(largeMacbookRef.current, 0);
            }
        },
        { dependencies: [showLargeMacbook] }
    );

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls>
        </>
    );
};

export default ModelSwitcher;
