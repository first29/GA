import { ScrollShadow } from "@nextui-org/react";
import EquiposBusqueda from "./EquiposBusqueda"
import ExportarBusqueda from './ExportarBusqueda';

/*
<ScrollShadow className='container h-screen '>
</ScrollShadow>
*/

export default function Busqueda() {
    return (
        <div className="h-screen">

            <EquiposBusqueda />
            <ExportarBusqueda />

        </div>
    )
}
