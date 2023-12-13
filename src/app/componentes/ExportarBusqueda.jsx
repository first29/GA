"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Input, Button } from "@nextui-org/react"
import axios from "axios"
import Filtros from "./filtros"
import * as XLSX from 'xlsx'

const ExportarBusqueda = () => {
    const { reset, register, unregister, watch, getValues, control, formState: { errors } } = useForm({
        defaultValues: {
            etiqueta: "a",
            serie: "a",
            ticket: "a",
            usuario: "a"
        }
    });
    const [more, setMore] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!(getValues("fma") && getValues("fme"))) {
            alert("debe seleccionar un rango de fechas")
            return
        }
        function formatoFechas(fecha) {
            if (fecha) return new Date(fecha).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })
            else return ""
        }
        try {
            const res = await axios.get('api/equipos/' + getValues("fma") + '/' + getValues("fme") + '/' + getValues("serie") + '/' + getValues("ticket") + '/' + getValues("usuario") + '/' + getValues("etiqueta"))
            const data = res.data[0]
            const formattedData = data.map((item) => ({
                ...item,
                fechaAdquisicion: formatoFechas(item.fechaAdquisicion),
                fecha_ingreso: formatoFechas(item.fecha_ingreso),
                fecha_salida: formatoFechas(item.fecha_salida)
            }));
            const workbook = XLSX.utils.book_new()
            const worksheet = XLSX.utils.json_to_sheet(formattedData)
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos')
            const fileName = 'reporte_de_equipos.xlsx'
            XLSX.writeFile(workbook, fileName)
            alert("descarga exitosa")
        } catch (err) {
            reset();
            console.log("a")
            alert(err)
        }
    }
    const enviarCorreo = async (e) => {
        e.preventDefault()
        if (!(getValues("fma") && getValues("fme"))) {
            alert("debe seleccionar un rango de fechas")
            return
        }
        try {
            const res = await axios.post('api/equipos/' + getValues("fma") + '/' + getValues("fme") + '/' + getValues("serie") + '/' + getValues("ticket") + '/' + getValues("usuario") + '/' + getValues("etiqueta"))
            alert(res.data);
        } catch (err) {
            reset();
            console.log("a")
            console.error(err)
        }
    }
    useEffect(() => { reset() }, [more])
    return (
        <div className="my-4 border-white">
            <h1 className="justify-center my-4 flex flex-wrap md:flex-nowrap" >Busqueda Avanzada</h1>
            <form className="border grid w-full gap-4 justify-center " onSubmit={handleSubmit}>
                <div className={" md:flex-nowrap " + ((!more) ? "flex" : "grid")}>
                    <div className="flex gap-4 justify-center">
                        <div className="grid w-1/2">
                            <label className="justify-cente ml-4">Fecha de Inicio</label>
                            <Input className="mx-4 border-stone-700" name="fme" type="Date"  {...register("fme", { required: { value: true, message: "Este campo es requerido" } })} />
                            {errors.fme && <span className="text-red-500">{errors.fme.message}</span>}
                        </div>
                        <div className="grid w-1/2">
                            <label className="justify-center ml-4 ">Fecha de fin</label>
                            <Input className="my-2 mx-4" name="fma" type="Date" {...register("fma", { required: { value: true, message: "Este campo es requerido" } })} />
                            {errors.fma && <span className="text-red-500">{errors.fma.message}</span>}
                        </div>
                    </div>
                    <div className="my-2">
                        {more ? <Filtros setMore={setMore} more={more} control={control} register={register} getValues={getValues}></Filtros> :
                            <Button className=" w-auto mx-8 mt-6 h-2/3 bg-stone-700 border-stone-700" variant="ghost" onClick={() => { setMore(!more) }}>Mas Filtros</Button>}
                    </div>
                </div>

                <div className="flex w-full mx-auto justify-center">
                    <Button disabled={false} className="bg-stone-700 border-stone-700 mx-8 basis-2/3" variant='ghost' type="submit">exportar</Button>
                    <Button className="bg-stone-700 border-stone-700 mx-8 basis-2/3" variant='ghost' onClick={enviarCorreo}>Enviar Correo</Button>
                </div>

            </form>
        </div>
    )
}

export default ExportarBusqueda