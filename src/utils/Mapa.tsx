import {MapContainer, Marker, TileLayer, useMapEvent} from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import {coordenadaDto} from '../utils/coordenadas.model';
import { useState } from "react";

let DefaultIcon=L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: mapaProps){
    const [coordenadas, setCoordenadas] = useState<coordenadaDto[]>(props.coordenadas);

    return(
        <MapContainer
            center={[-31.421281570990892, -64.19743458873707]} zoom={18} style={{height: props.height}}
        >
            <TileLayer 
                attribution="React Peliculas"
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <ClickMapa setPunto={coordenadas => {

                }}/>
                <ClickMapa setPunto={coordenadas => {
                    setCoordenadas([coordenadas]);
                    props.manejarClickMapa(coordenadas);
                }}/>

                {coordenadas.map(coordenada => <Marcador key={coordenada.lat + coordenada.lng} {...coordenada} />)}

        </MapContainer>
    )
}

function Marcador(props: coordenadaDto){
    return (
        <Marker position={[props.lat, props.lng]} />
    )
}

function ClickMapa(props: clickMapaProps){
    useMapEvent('click', e => {
        props.setPunto({lat: e.latlng.lat,lng: e.latlng.lng});
    })
    return null;
}

interface clickMapaProps{
    setPunto(coordenadas: coordenadaDto): void;
}

interface mapaProps{
    height: string;
    coordenadas: coordenadaDto[];
    manejarClickMapa(coordenadas: coordenadaDto): void;
}

Mapa.defaultProps = {
    height: '500px'
}