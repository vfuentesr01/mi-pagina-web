import Ejemplo from "~/components/Ejemplo";
import type { Route } from "./+types/home";
import Noticia from "~/components/noticia";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Estamos probando la página web" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  
  return(
      <h1 className="text-4xl">HOLA :)</h1>
      <h2>Esto es un subtítulo</h2>
      <div>
        <h1>Noticias</h1>
        <Ejemplo/>
        {/* Noticias */}
        <section className="border border-yellow-300">
          {/* Noticias1 */}
          <Noticia titulo="Título 1" descripcion="Descripción 1" gap={8}/>
           {/* Noticias2 */}
          <Noticia titulo="Título 2" descripcion="Descripción 2" />
           {/* Noticias3 */}
          <Noticia titulo= "Título 3" descripcion="Descripción 3"/>
        </section>
      </div>
   </div>
   )
}
//return <<welcome>