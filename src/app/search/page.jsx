import { ScrollShadow } from "@nextui-org/react";
import EquiposBusqueda from "../componentes/EquiposBusqueda"
import ExportarBusqueda from '../componentes/ExportarBusqueda';
export const metadata = {
  title: 'GA Search',
}
export default function Home() {
  return (
    <div className='p-6'>
      <EquiposBusqueda />
      <ExportarBusqueda />
    </div>
  )
}
