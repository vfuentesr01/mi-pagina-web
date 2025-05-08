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
      <div className="grid h-full w-full gap-4 bg-gray-200 p-2 grid-cols-4 grid-rows-5 rounded-lg shadow-md">

        <div
          className="col-span-1 row-span-2 bg-pink-200 rounded-lg shadow-md flex items-center justify-center"
        >
          <p className="text-6xl text-gray-600">ROSALíA</p>
        </div>

        <div
          className="col-span-3 row-span-2 bg-pink-500 rounded-lg shadow-md flex items-center justify-center"
        >
          <p className="text-6xl text-gray-300">Pregúntale lo que quieras...</p>
        </div>

        <div
          className="col-span-2 row-span-3 bg-pink-400 rounded-lg shadow-md flex items-center justify-center"
        >
          <img src="images.jpeg" alt="Descripción de la imagen" className="w-1/2 h-auto rounded shadow-lg"/>

          <p></p>
        </div>

        <div
          className="col-span-2 row-span-2 bg-pink-100 rounded-lg shadow-md flex flex-col items-center justify-center"
        >
          <p className="text-2xl text-gray-400">Ven a vernos en la Feria de Abril</p>
          <p className="text-2xl text-gray-500">Y podrás ganar una visita con ella</p>
          <p className="text-2xl text-gray-600">Del 6 de Mayo al 11 de Mayo 2025</p>
        </div>

        <div
          className="col-span-2 row-span-2 bg-pink-300 rounded-lg shadow-md flex items-center justify-center"
        >
          <p>¡Este año será inolvidable!</p>
        </div>

        <div
          className="col-span-4 row-span-1 bg-red-200 rounded-lg shadow-md flex flex-col items-center justify-center"
        >
        
            <p className="text-[15px] text-gray-600">RADIO 'EL CANDIL'</p>
            <p className="text-[10px] text-gray-600">elcandil@gmail.com</p>
          
        </div>

      </div>
    </div>

  )
}
//return <<welcome>