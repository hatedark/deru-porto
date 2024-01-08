'use client';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styles from './cube.module.css';

export default function Index() {
    return (
        <div className={styles.cube}>
            <Canvas>
                <ambientLight intensity={1} />
                <directionalLight position={[1, 2, 1]} />
                <Cube />
            </Canvas>
        </div>
    );
}

function Cube(): any {
    const mesh: any = useRef(null);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.15;
        mesh.current.rotation.y += delta * 0.15;
        mesh.current.rotation.z += delta * 0.15;
    });

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial color={'gray'} />
        </mesh>
    );
}
