import Ejemplo from "~/components/Ejemplo";
import type { Route } from "./+types/home";
import Noticia from "~/components/noticia";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Estamos probando la página web" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

  return (
  
    <div className="flex h-screen m-auto w-full items-center justify-center">
    <div className="grid h-full w-full gap-4 bg-gray-200 p-2 grid-cols-4 grid-rows-4 rounded-lg shadow-md">
    
      <div 
        className="col-span-2 row-span-1 bg-pink-200 rounded-lg shadow-md flex items-center justify-center"
      >
        <p>Salmon</p>
      </div>
    
      <div 
        className="col-span-2 row-span-1 bg-lime-200 rounded-lg shadow-md flex items-center justify-center"
      >
        <p>Broccoli</p>
      </div>
    
      <div 
        className="col-span-1 row-span-4 bg-yellow-200 rounded-lg shadow-md flex items-center justify-center"
      >
        <p>Tamago</p>
      </div>
    
      <div 
        className="col-span-2 row-span-2 bg-tan-200 rounded-lg shadow-md flex items-center justify-center"
      >
        <p>Pork</p>
      </div>
    
      <div 
        className="col-span-1 row-span-2 bg-green-200 rounded-lg shadow-md flex items-center justify-center"
      >
        <p>Edamame</p>
      </div>
    
      <div 
        className="col-span-3 row-span-2 bg-red-200 rounded-lg shadow-md flex items-center justify-center"
      >
        <p>Tomato</p>
      </div>
    
    </div>
  </div>
  
  )
}
//return <<welcome>