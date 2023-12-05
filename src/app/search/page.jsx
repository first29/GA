
import Image from 'next/image'
import { Input, Button } from "@nextui-org/react";
import EquiposBusqueda from "../componentes/EquiposBusqueda"
import ExportarBusqueda from '../componentes/ExportarBusqueda';

export default function Home() {

  return (
    <div className='p-6'>
      <EquiposBusqueda />
      <br />
      <ExportarBusqueda/>
    </div>
  )
}
