"use client"
import { useState, useRef, useEffect } from "react"
import { Input, Button } from "@nextui-org/react"
import axios from "axios"

const EquiposBusqueda = () => {
    const [id, setId] = useState()
    const [activo, setActivo] = useState(null)
    const form = useRef();

    const handlechange = (e) => {
        setId(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (id == "") {
            setActivo("None");
            return
        }
        try {
            const res = await axios('api/equipos/' + id)
            setActivo(res.data)
        } catch (err) {
            form.current.reset();
            setActivo("None");
            console.error(err)
        }
    }
    useEffect(() => { if (activo == "None") setTimeout(() => { setActivo(null) }, 2000) }, [activo])
    return (
        <div className="md:mx-auto">
            <h1 className="sm:w-full md:w-2/3 xl:w-2/3 mx-auto justify-center my-4 flex flex-wrap md:flex-nowrap border border-cyan-700 bg-neutral-600" >Busqueda por Nro de Activo</h1>
            <form className="justify-center flex flex-wrap md:flex-nowrap " ref={form}>
                <div>

                </div>
                <Input name="activo" type="id" label="Nro de Activo" onChange={handlechange} className="w-1/2" />
                <Button className="p-6 bg-stone-700" variant='ghost' onClick={handleSubmit}>Buscar</Button>

            </form>
            {activo && (
                activo != "None" ?
                    <div className="">
                        <div className="mt-4 flex sm:gap-2 h-1/3">
                            <div className="flex p-8 grid border border-stone-600 bg-stone-300 w-auto mx-auto ">
                                <p >Activo: {activo[0].ACTIVO}</p>
                                <p >Tipo: {activo[0].tipo}</p>
                                <p >Modelo: {activo[0].modelo}</p>
                                <p >Serie: {activo[0].serie}</p>
                                <p >Etiqueta: {activo[0].etiqueta}</p>
                                <p >Caracteristicas: {activo[0].caracteristicas}</p>
                                <p >Sede: {activo[0].sede}</p>
                                <p >Usuario Actual: {activo[0].usuario_asignado}</p>
                                <p >Ticket Actual: {activo[0].ticket}</p>
                                <p >Proyecto: {activo[0].proyecto}</p>
                            </div>
                            <div className="flex p-8 grid  border border-stone-600 bg-stone-300  w-auto mx-auto  ">
                                <p >Fecha de adquisicion: {new Date(activo[0].fechaAdquisicion).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                <p >Marca: {activo[0].marca}</p>
                                <p >Codigo de Cargador: {activo[0].ct_cargador ? activo[0].ct_cargador : "no cuenta con cargador"}</p>
                                <p >Depreciacion: {activo[0].DEPRECIACION}</p>
                                <p >Estado: {activo[0].estado}</p>
                                <p >Operatividad: {activo[0].operatividad}</p>
                                {activo[0].fecha_ingreso && <p>Fecha de Ingreso: {new Date(activo[0].fecha_ingreso).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>}
                                {activo[0].fecha_salida && <p>Fecha de Salida: {new Date(activo[0].fecha_salida).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>}
                                <p >Motivo de Salida/Ingreso: {activo[0].motivo_salida_ingreso}</p>


                            </div>
                        </div>
                        <br />
                        <div className="flex p-16 grid  border border-stone-600 bg-stone-300  w-2/3 mx-auto">
                            <p >observacion: {activo[0].observacion}</p>
                            <p >accesorio: {activo[0].accesorio}</p>
                            <p >inconveniente: {activo[0].inconveniente}</p>
                            <p >Usuario(s) Anterior(es): {activo[0].usuario_anterior}</p>
                            <p >Ticket(s) Anterior(es): {activo[0].ticket_anterior}</p>
                        </div>
                    </div> : <p className="my-6 text-center">No se encontro Activo</p>)}
        </div>
    )
}

export default EquiposBusqueda