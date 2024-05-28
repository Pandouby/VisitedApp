import { Suspense, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import React from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { color, texture } from 'three/examples/jsm/nodes/Nodes.js';

export const GlobeComponent = () => {
    const [countries, setCountries] = useState({ features: [] });
    const [hoverD, setHoverD] = useState();

    useEffect(() => {
        // load data
        fetch('../datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(setCountries);
    }, []);

    /*
    return (
        <Globe
            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
            lineHoverPrecision={0}
            polygonsData={countries.features.filter(
                d => d.properties.ISO_A2 !== 'AQ',
            )}
            polygonAltitude={d => (d === hoverD ? 0.12 : 0.06)}
            polygonCapColor={'blue'}
            polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
            polygonStrokeColor={() => '#111'}
            polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
        GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
        Population: <i>${d.POP_EST}</i>
      `}
            onPolygonHover={setHoverD}
            onPolygonClick
            polygonsTransitionDuration={300}
        />
    );
    */

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
                <hemisphereLight intensity={0.3} groundColor="black" />
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
            <Suspense>
                <OrbitControls
                    autoRotate
                    enableZoom={true}
                    target={[0, 0, 0]}
                />
                <mesh
                    visible
                    userData={{ hello: 'world' }}
                    position={[0, 0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry args={[4, 32, 32]} />
                    <meshStandardMaterial color="hotpink" transparent />
                </mesh>
                <Preload all />
            </Suspense>
        </Canvas>
    );
};
