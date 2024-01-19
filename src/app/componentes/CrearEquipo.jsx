"use client"
import { Input, Button, SelectItem, Select } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import axios from "axios";


export default function CrearEquipo() {
    const { reset, register, watch, handleSubmit } = useForm({
        defaultValues: {
            activo: "¿",
            f_adquisicion: "¿",
            depreciacion: "¿",
            tipo: "¿",
            pulgadas: "¿",
            processador: "¿",
            modelo_processador: "¿",
            ram: "¿",
            tipo_ram: "¿",
            tipo_disco: "¿",
            capacidad_disco: "¿",
            marca: "¿",
            modelo: "¿",
            serie: "¿",
            ct_cargador: "¿",
            etiqueta: "¿",
            operatividad: "¿",
            estado: "¿",
            ubicacion: "¿",
            est_garantia: "¿",
            pago_mensual: "¿",
        },
    });
    useEffect(() => { console.log(watch()) }, [watch()])
    // Manejador para la presentación del formulario
    const onSubmit = handleSubmit(async () => {
        try {
            // Realiza la solicitud POST para crear un equipo
            const res = await axios.post('/api/equipos', watch());
            console.log(res.data);
        } catch (err) {
            // Maneja errores y muestra una alerta
            reset();
            alert(err);
        }
    });
    const tipo = watch("tipo")
    // Renderiza el formulario para la creación de equipos
    return (
        <form className='grid' onSubmit={onSubmit}>
            <div className='flex flex-wrap ml-12'>
                <Input className="mx-4 my-2 w-1/6 " name="activo" label="Codigo de Activo" {...register("activo", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input type="date" labelPlacement="outside" placeholder="¿" className="mx-4 my-2 w-1/6 " name="f_adquisicion" label="Fecha de Adquisición" {...register("f_adquisicion", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="depreciacion" label="Depreciación" {...register("depreciacion", { required: { value: true, message: "Este campo es requerido" } })} />
                <Select label="Tipo" className="mx-4 my-2 w-1/6 "  {...register("tipo", { required: { value: true, message: "Este campo es requerido" } })}>
                    <SelectItem key="DESKTOP" value="DESKTOP">Desktop</SelectItem>
                    <SelectItem key="NOTEBOOK" value="NOTEBOOK">NoteBook</SelectItem>
                    <SelectItem key="ALLINONE" value="ALLINONE">All in One</SelectItem>
                    <SelectItem key="DISPLAY" value="DISPLAY">Display</SelectItem>
                </Select>
                {(tipo == "DISPLAY" || tipo == "ALLINONE") && <Input className="mx-4 my-2 w-1/6 " name="pulgadas" label="pulgadas" {...register("pulgadas", { required: { value: true, message: "Este campo es requerido" } })} />}
                {(tipo == "DESKTOP" || tipo == "NOTEBOOK" || tipo == "ALLINONE") && <>
                    <Input className="mx-4 my-2 w-1/6 " name="processador" label="Processador" {...register("processador", { required: { value: true, message: "Este campo es requerido" } })} />
                    <Input className="mx-4 my-2 w-1/6 " name="modelo_processador" label="Modelo del Procesador" {...register("modelo_processador", { required: { value: true, message: "Este campo es requerido" } })} />
                    <Input className="mx-4 my-2 w-1/6 " name="ram" label="Capacidad de Ram" {...register("ram", { required: { value: true, message: "Este campo es requerido" } })} />
                    <Input className="mx-4 my-2 w-1/6 " name="tipo_ram" label="Tipo de Ram" {...register("tipo_ram", { required: { value: true, message: "Este campo es requerido" } })} />
                    <Input className="mx-4 my-2 w-1/6 " name="tipo_disco" label="Tipo de Disco" {...register("tipo_disco", { required: { value: true, message: "Este campo es requerido" } })} />
                    <Input className="mx-4 my-2 w-1/6 " name="capacidad_disco" label="Capacidad de Disco" {...register("capacidad_disco", { required: { value: true, message: "Este campo es requerido" } })} />
                </>}
                <Input className="mx-4 my-2 w-1/6 " name="marca" label="Marca" {...register("marca", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="modelo" label="Modelo" {...register("modelo", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="serie" label="Serie" {...register("serie", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="ct_cargador" label="Codigo de Cargador" {...register("ct_cargador")} />
                <Input className="mx-4 my-2 w-1/6 " name="etiqueta" label="Etiqueta" {...register("etiqueta", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="operatividad" label="Operatividad" {...register("operatividad", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="estado" label="Estado" {...register("estado", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="ubicacion" label="Ubicación" {...register("ubicacion", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="est_garantia" label="Estado de Garantía" {...register("est_garantia", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="pago_mensual" label="Pago Mensual" {...register("pago_mensual", { required: { value: true, message: "Este campo es requerido" } })} />
            </div>
            <Button className="border-stone-700 bg-stone-700 w-1/2  ml-96 my-4" variant='ghost' type="submit">Crear Equipo</Button>
        </form>
    );
}
