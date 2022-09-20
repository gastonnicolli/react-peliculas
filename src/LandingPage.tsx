import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});
    useEffect(()=> {
        const timerId = setTimeout(() => {
          setPeliculas({
            enCartelera:[
              {
                id:1, titulo: 'Spider-Man: Far from Home', 
                poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xOLFztPpLRE-XPqAQ7EQGAHaNK%26pid%3DApi&f=1'
              },
              {
                id:2, titulo: 'Moana', 
                poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.urhUP_aBL06g9p9JTlqWgAHaFV%26pid%3DApi&f=1'
              },
              {
                id:3, titulo: 'John Wick', 
                poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0it9hh39bVYtnHp042-p0QHaLH%26pid%3DApi&f=1'
              },
              {
                id:4, titulo: 'Depredador', 
                poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HiDC8OHb6oFOQnsacvwZBwHaJ4%26pid%3DApi&f=1'
              }
            ],
          proximosEstrenos: [
            {
              id:5, titulo: 'Soul', 
              poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-YzEZTLrhEwSx5iBnRHLCAHaK9%26pid%3DApi&f=1'
            },
            {
              id:6, titulo: 'El día que la tierra se detuvo', 
              poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NSEJ6Kp1Ph5ncT4cZWURWgAAAA%26pid%3DApi&f=1'
            },
            {
              id:7, titulo: 'John Wick 2', 
              poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.B5-VX9EsgKu83CarsjM1UAHaI6%26pid%3DApi&f=1'
            },
            {
              id:8, titulo: 'Final Fantasy', 
              poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Ce69g-_fBvQGV6RKzhNXhwHaKe%26pid%3DApi&f=1'
            }
          ]
          })
        },500);
    
        return () => clearTimeout(timerId);})
    return (
        <>  
            <h3>Peliculas en Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera}/>

            <h3>Proximos extrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>
    );
    
}