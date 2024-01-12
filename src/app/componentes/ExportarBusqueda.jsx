"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Input, Button } from "@nextui-org/react"
import axios from "axios"
import Filtros from "./filtros"
import * as XLSX from 'xlsx'

const ExportarBusqueda = () => {
    const { reset, register, setValue, watch, getValues, control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            etiqueta: "¿",
            serie: "¿",
            ticket: "¿",
            usuario: "¿"
        }
    });
    const [more, setMore] = useState(false)
    const onSubmit = handleSubmit(async (e) => {
        validar()
        if (!(watch("fma") && watch("fme"))) {
            alert("debe seleccionar un rango de fechas")
            return
        }
        function formatoFechas(fecha) {
            if (fecha) return new Date(fecha).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })
            else return ""
        }
        try {
            const res = await axios.get('api/equipos/' + watch("fma") + '/' + watch("fme") + '/' + watch("serie") + '/' + watch("ticket") + '/' + watch("usuario") + '/' + watch("etiqueta"))
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
            alert(err)
        }
    })
    function validar() {
        debugger
        const param = watch();
        const result = Object.keys(param).reduce((acc, key) => {
            debugger
            acc[key] = (param[key] !== undefined) ? param[key] : "¿";
            return acc;
        }, {});
        // Reasignar los valores al estado del formulario
        Object.keys(result).forEach((key) => setValue(key, result[key]));

        console.log(watch());
    }
    const enviarCorreo = async (e) => {
        e.preventDefault()
        validar()
        if (!(watch("fma") && watch("fme"))) {
            alert("debe seleccionar un rango de fechas")
            return
        }
        try {
            const res = await axios.post('api/equipos/' + watch("fma") + '/' + watch("fme") + '/' + watch("serie") + '/' + watch("ticket") + '/' + watch("usuario") + '/' + watch("etiqueta"))
            alert(res.data);
        } catch (err) {
            reset();
            console.log("a")
            console.error(err)
        }
    }
    useEffect(() => { reset() }, [more])
    return (
        <div className="mt-6 mb-16">
            <h1 className=" sm:w-full md:w-2/3 xl:w-2/3 mx-auto justify-center my-4 flex flex-wrap md:flex-nowrap border border-cyan-700 bg-neutral-600" >Busqueda Avanzada</h1>
            <form className="grid w-full gap-4 justify-center " onSubmit={onSubmit}>
                <div className={" md:flex-nowrap " + ((!more) ? "flex" : "grid")}>
                    <div className="flex gap-4 justify-center">
                        <div className="grid w-1/2 mx-4">
                            <label className="justify-cente ml-4 text-stone-300">Fecha de Inicio</label>

                            <Input className="mx-4 border-stone-700" name="fme" type="Date"  {...register("fme", { required: { value: true, message: "Este campo es requerido" } })} />
                            {errors.fme && <span className="text-red-500 justify-center ml-4">{errors.fme.message}</span>}
                        </div>
                        <div className="grid w-1/2 mx-4">
                            <label className="justify-center ml-4 text-stone-300">Fecha de fin</label>

                            <Input className="border-stone-700 mx-4" name="fma" type="Date" {...register("fma", { required: { value: true, message: "Este campo es requerido" } })} />
                            {errors.fma && <span className="text-red-500 justify-center ml-4">{errors.fma.message}</span>}
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