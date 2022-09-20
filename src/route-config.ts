import CrearActor from "./actores/CrearActor";
import EditarActor from "./actores/EditarActor";
import IndiceActores from "./actores/IndiceActores";

import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCines from "./cines/IndiceCines";

import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";

import LandingPage from "./LandingPage";

import CrearPelicula from "./peliculas/CraerPelicula";
import EditarPelicula from "./peliculas/EditarPelicula";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarALanding from "./utils/RedireccionarALanding";

const rutas = [
    {path: "/peliculas", componente:FiltroPeliculas, exact: true},
    {path: "/peliculas/filtrar", componente:FiltroPeliculas},
    {path: "/peliculas/crear", componente:CrearPelicula},
    {path: "/peliculas/editar/:id(\\d+)", componente:EditarPelicula},

    {path: "/cines", componente:IndiceCines, exact: true},
    {path: "/cines/crear", componente:CrearCine},
    {path: "/cines/editar/:id(\\d+)", componente:EditarCine},

    {path: "/actores", componente:IndiceActores, exact: true},
    {path: "/actores/crear", componente:CrearActor},
    {path: "/actores/editar/:id(\\d+)", componente:EditarActor},

    {path: "/generos", componente:IndiceGeneros, exact: true},
    {path: "/generos/crear", componente:CrearGenero},
    {path: "/generos/editar/:id(\\d+)", componente:EditarGenero},

    {path: "/", componente:LandingPage, exact: true},

    {path: "*", componente:RedireccionarALanding }
];

export default rutas;