import { ScrollShadow } from "@nextui-org/react";
import EquiposBusqueda from "../componentes/EquiposBusqueda"
import ExportarBusqueda from '../componentes/ExportarBusqueda';
export const metadata = {
  title: 'GA Search',
}
export default function Home() {
  return (
    <div className="mx-4 w-screen justify-center">
      <ScrollShadow className='container fixed w-screen md:h-full h-[400px] p-5 scroll-smooth justify-center'>
        <EquiposBusqueda />
        <ExportarBusqueda />
      </ScrollShadow>
    </div>
  )
}
