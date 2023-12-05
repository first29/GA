"use client"
import { useState, useRef } from "react"
import { Input, Button } from "@nextui-org/react"
import axios from "axios"

const EquiposBusqueda = () => {
    const [activos, setActivos] = useState()
    const [activo, setActivo] = useState("null")
    const form = useRef();

    const handlechange = (e) => {
        setActivos({"activo" : e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get('api/equipos/' + activos.activo)
            setActivo(res.data)
        } catch (err) {
            setActivo("null");
            console.error(err)
        }

        form.current.reset();
    }
    return (
        <div className="">
            <form className="flex w-full flex-wrap md:flex-nowrap gap-4" ref={form}>
                <Input name="activo" type="id" label="Nro de Activo" onChange={handlechange} />
                <Button className="bg-stone-700" variant='ghost' onClick={handleSubmit}>a</Button>
            </form>
            <br />
            {activo!="null" ? (<>
                <div className=" flex gap-4  h-1/3 justify-center">
                    <div className="flex p-8 grid  border border-stone-600 bg-stone-300 w-1/2 ">
                        <p >Fecha de adquisicion: {new Date(activo[0].fechaAdquisicion).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                        <p >Tipo: {activo[0].tipo}</p>
                        <p >Serie: {activo[0].serie}</p>
                        <p >Almacen: {activo[0].almacen}</p>
                        <p >Sub Area: {activo[0].sub_area}</p>
                        <p >caracteristicas: {activo[0].caracteristicas}</p>
                        <p >Usuario asignado: {activo[0].usuario_asignado}</p>
                    </div>
                    <div className="flex p-8 grid  border border-stone-600 bg-stone-300 content-center w-1/2">
                        <p >Estado: {activo[0].estado}</p>
                        <p >Depreciacion: {activo[0].DEPRECIACION}</p>
                        <p >etiqueta: {activo[0].etiqueta}</p>
                        {activo[0].fecha_ingreso && <p>Fecha de Ingreso: {new Date(activo[0].fecha_ingreso).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>}
                        {activo[0].fecha_salida && <p>Fecha de Salida: {new Date(activo[0].fecha_salida).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>}
                        <p >marca: {activo[0].marca}</p>
                        <p >modelo: {activo[0].modelo}</p>
                        <p >Motivo de Salida/Ingreso: {activo[0].motivo_salida_ingreso}</p>
                        <p >operatividad: {activo[0].operatividad}</p>
                        <p >proyecto: {activo[0].proyecto}</p>
                        <p >ticket: {activo[0].ticket}</p>
                        <p >Codigo de Cargador: {activo[0].ct_cargador}</p>
                    </div>
                </div>
                <br />
                <div className="flex p-16 grid  border border-stone-600 bg-stone-300  ">
                    <p >observacion: {activo[0].observacion}</p>
                    <p >inconveniente: {activo[0].inconveniente}</p>
                </div>
            </>) : (<>No se encontro </>)}
        </div>
    )
}

export default EquiposBusqueda