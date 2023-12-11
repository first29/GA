import { ScrollShadow } from "@nextui-org/react";
import EquiposBusqueda from "../componentes/EquiposBusqueda"
import ExportarBusqueda from '../componentes/ExportarBusqueda';
export const metadata = {
  title: 'GA Search',
}
export default function Home() {
  return (
    <div className="mx-4">
      <ScrollShadow className='container fixed w-auto md:h-full h-[400px] p-5 scroll-smooth justify-center'>
        <EquiposBusqueda />
        <ExportarBusqueda />
      </ScrollShadow>
    </div>
  )
}
