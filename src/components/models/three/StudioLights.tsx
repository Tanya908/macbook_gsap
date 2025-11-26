import React from "react";
import { Environment, Lightformer } from "@react-three/drei";

const StudioLights: React.FC = () => {

    const amb = 0.38;
    const hemi = 0.62;

    const side = 3.6;
    const front = 2.2;
    const back = 6.0;
    const top = 3.0;
    const bottom = 2.6;

    return (
        <group name="lights">
            <ambientLight intensity={amb} />
            <hemisphereLight args={[0xdfe6f0, 0x232323, hemi]} position={[0, 1, 0]} />

            <Environment resolution={256}>
                <group>
                    <Lightformer form="rect" intensity={side} position={[-6, 3, 0]} scale={[7, 3, 1]} rotation={[0, Math.PI / 2, 0]} />
                    <Lightformer form="rect" intensity={side} position={[ 6, 3, 0]} scale={[7, 3, 1]} rotation={[0,-Math.PI / 2, 0]} />
                    <Lightformer form="rect" intensity={front} position={[0, 2.5, 6]} scale={[8, 3, 1]} rotation={[0, Math.PI, 0]} />
                    <Lightformer form="rect" intensity={back} position={[0, 3, -6]} scale={[9, 4, 1]} rotation={[0, 0, 0]} color="#e8edf4" />
                    <Lightformer form="rect" intensity={top}    position={[0, 7, 0]}  scale={[8, 3, 1]} rotation={[ Math.PI/2, 0, 0]} />
                    <Lightformer form="rect" intensity={bottom} position={[0,-7, 0]}  scale={[8, 3, 1]} rotation={[-Math.PI/2, 0, 0]} />
                </group>
            </Environment>

            <spotLight position={[0, 2.2, -4.6]} angle={0.5} penumbra={1} decay={0} intensity={Math.PI * 0.28} />

            <spotLight position={[0, 1.0, 4.4]} angle={0.48} penumbra={1} decay={0} intensity={Math.PI * 0.20} />
        </group>
    );
};

export default StudioLights;
