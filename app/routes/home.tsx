import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Estamos probando la página web" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(
  <div>
      <h1 className="text-4xl">HOLA :)</h1>
      <h2>Esto es un subtítulo</h2>
   </div>
   )
}
//return <<welcome>