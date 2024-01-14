"use client"
import { ScrollShadow } from "@nextui-org/react";
import EquiposBusqueda from "./EquiposBusqueda"
import ExportarBusqueda from './ExportarBusqueda';
import { useSearchParams } from 'next/navigation';

export default function Busqueda() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    return (
        <ScrollShadow className='container h-screen '>
            {searchParams.get("category")==2?<ExportarBusqueda />:<EquiposBusqueda />}
        </ScrollShadow>
    )
}
