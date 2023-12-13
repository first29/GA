"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Input, Button } from "@nextui-org/react"
import axios from "axios"
import Filtros from "./filtros"
import * as XLSX from 'xlsx'

const EquiposBusqueda = () => {
    const { reset, register, unregister, watch, getValues,control } = useForm({
        defaultValues: {
            etiqueta: "a",
            fma: "a",
            fme: "a",
            serie: "a",
            ticket: "a",
            usuario: "a"
        }
    });
    const [more, setMore] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
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
        } catch (err) {
            reset();
            alert(err)
        }
    }
    const enviarCorreo = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('api/equipos/' + getValues("fma") + '/' + getValues("fme") + '/' + getValues("serie") + '/' + getValues("ticket") + '/' + getValues("usuario") + '/' + getValues("etiqueta"))
            alert(res.data);
        } catch (err) {
            reset();
            console.error(err)
        }
    }
    useEffect(() => { console.log(watch()) }, [watch()])
    useEffect(() => { reset() }, [more])
    return (
        <div className="mt-40 border-white">
            <form className="grid w-full gap-4 justify-center" onSubmit={handleSubmit}>
                <div className={(!more) ? "flex" : "grid" + " md:flex-nowrap"}>
                    <div className="flex">
                        <Input className="mx-4 border-stone-700" name="fme" type="Date"  {...register("fme")} />
                        <Input className="mx-4" name="fma" type="Date" {...register("fma")} />
                    </div>

                    <div className="my-2">
                        {more ? <Filtros setMore={setMore} more={more} control={control} register={register} getValues={getValues}></Filtros> :
                            <Button className=" w-1/4 mx-auto h-full bg-stone-700 border-stone-700" variant="ghost" onClick={() => { setMore(!more) }}>Mas Filtros</Button>}
                    </div>
                </div>

                <div className="flex w-full mx-auto justify-center">
                    <Button disabled={false} className="bg-stone-700 border-stone-700 mx-8 basis-2/3" variant='ghost' type="submit">exportar</Button>
                    <Button className="bg-stone-700 border-stone-700 mx-8 basis-2/3" variant='ghost' onClick={enviarCorreo}>Enviar Correo</Button>
                </div>

            </form>

            <br />

        </div>
    )
}

export default EquiposBusqueda