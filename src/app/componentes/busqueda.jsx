import { ScrollShadow } from "@nextui-org/react";
import EquiposBusqueda from "./EquiposBusqueda"
import ExportarBusqueda from './ExportarBusqueda';

export default function Busqueda() {
    return (
        <ScrollShadow className='container h-screen '>
            <EquiposBusqueda />
            <ExportarBusqueda />
        </ScrollShadow>
    )
}
