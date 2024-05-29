import { Suspense, useEffect, useState } from 'react';
import React from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export const GlobeComponent = () => {
    const [countries, setCountries] = useState({ features: [] });
    const [hoverD, setHoverD] = useState();

    useEffect(() => {
        // load data
        fetch('../datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(setCountries);
    }, []);

    const earthTexture = useLoader(
        THREE.TextureLoader,
        'resources/earth_map_10k.jpg',
    );

    return (
        <Canvas
            className="canvas"
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 50,
                near: 0.1,
                far: 400,
                position: [-4, 1, 1],
            }}>
            <mesh>
                <hemisphereLight intensity={50} groundColor="black" />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024}
                />
                <pointLight intensity={1} />
            </mesh>
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={true}
                    target={[0, 0, 0]}
                />
                <mesh
                    visible
                    userData={{ hello: 'world' }}
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}>
                    <sphereGeometry args={[4, 32, 32]} />
                    <meshStandardMaterial map={earthTexture} transparent />
                </mesh>
                <Preload all />
            </Suspense>
        </Canvas>
    );
};
