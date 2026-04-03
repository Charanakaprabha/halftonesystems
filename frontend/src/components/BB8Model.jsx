import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function BB8Model(props) {
    const group = useRef();
    
    // Simple rotation animation to make it feel alive
    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Body */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.4} />
            </mesh>

            {/* Head */}
            <mesh position={[0, 1.2, 0]}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial color="#e0e0e0" roughness={0.5} />
            </mesh>

            {/* Eye / Sensor */}
            <mesh position={[0, 1.3, 0.55]}>
                <sphereGeometry args={[0.15, 16, 16]} />
                <meshStandardMaterial color="#222222" />
            </mesh>

            {/* Orange Stripe on Body */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.01, 0.05, 16, 100]} />
                <meshStandardMaterial color="#ff8800" />
            </mesh>
            
            {/* Orange Stripe on Body (Vertical) */}
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <torusGeometry args={[1.01, 0.05, 16, 100]} />
                <meshStandardMaterial color="#ff8800" />
            </mesh>
        </group>
    );
}
