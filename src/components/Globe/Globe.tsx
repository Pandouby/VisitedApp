import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

export const GlobeComponent = () => {
    const [countries, setCountries] = useState({ features: []});
    const [hoverD, setHoverD] = useState();

    useEffect(() => {
      // load data
      fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
    }, []);

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
};
