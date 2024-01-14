"use client"
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import axios from "axios";


export default function CrearEquipo() {
    const { reset, register, watch, handleSubmit } = useForm({
        defaultValues: {
            activo: "",
            f_adquisicion: "",
            depreciacion: "",
            tipo: "",
            marca: "",
            modelo: "",
            serie: "",
            ct_cargador: "",
            etiqueta: "",
            caracteristicas: "",
            operatividad: "",
            estado: "",
            ubicacion: "",
            est_garantia: "",
            pago_mensual: "",
        },
    });

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

    // Renderiza el formulario para la creación de equipos
    return (
        <form className='grid' onSubmit={onSubmit}>
            <div className='flex flex-wrap ml-12'>
                <Input className="mx-4 my-2 w-1/6 " name="activo" label="Activo" {...register("activo", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input type="date" labelPlacement="outside" placeholder="¿" className="mx-4 my-2 w-1/6 " name="f_adquisicion" label="Fecha de Adquisición" {...register("f_adquisicion", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="depreciacion" label="Depreciación" {...register("depreciacion", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="tipo" label="Tipo" {...register("tipo", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="marca" label="Marca" {...register("marca", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="modelo" label="Modelo" {...register("modelo", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="serie" label="Serie" {...register("serie", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="ct_cargador" label="CT Cargador" {...register("ct_cargador", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="etiqueta" label="Etiqueta" {...register("etiqueta", { required: { value: true, message: "Este campo es requerido" } })} />
                <Input className="mx-4 my-2 w-1/6 " name="caracteristicas" label="Características" {...register("caracteristicas", { required: { value: true, message: "Este campo es requerido" } })} />
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
