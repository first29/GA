"use client"
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import axios from "axios";

// Define el componente para la creación de registros
export default function CrearMovimiento() {
  const { reset, register, watch, handleSubmit } = useForm({
    defaultValues: {
      tipo: "",
      fecha: "",
      usuario: "",
      ticket: "",
      motivo: "",
      observacion: "",
      inconveniente: "",
      accesorio: "",
      activo: "",
    },
  })

  // Manejador para la presentación del formulario
  const onSubmit = handleSubmit(async () => {
    try {
      // Realiza la solicitud POST para crear un registro
      const res = await axios.post('/api/registros', watch());
      console.log(res.data);
    } catch (err) {
      // Maneja errores y muestra una alerta
      reset();
      alert(err);
    }
  })
  return (
    <form className='grid ml-32' onSubmit={onSubmit}>
      <div className='flex flex-wrap -mx-4'>
        <Input className="mx-4 my-2 w-1/6" name="activo" label="Activo" {...register("activo", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 my-2 w-1/6 color-text-white" name="tipo" label="Tipo" {...register("tipo", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 my-2 w-1/6" name="fecha" type="date" labelPlacement="outside" placeholder="¿" label="Fecha" {...register("fecha", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 my-2 w-1/6" name="usuario" label="Usuario" {...register("usuario", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 my-2 w-1/6" name="ticket" label="Ticket" {...register("ticket", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 my-2 w-1/6" name="motivo" label="Motivo" {...register("motivo", { required: { value: true, message: "Este campo es requerido" } })} />
        <Textarea className="mx-4 my-2 w-1/6" name="observacion" label="Observación" {...register("observacion", { required: { value: true, message: "Este campo es requerido" } })} />
        <Textarea className="mx-4 my-2 w-1/6" name="inconveniente" label="Inconveniente" {...register("inconveniente", { required: { value: true, message: "Este campo es requerido" } })} />
        <Textarea className="mx-4 my-2 w-1/6" name="accesorio" label="Accesorio" {...register("accesorio", { required: { value: true, message: "Este campo es requerido" } })} />
      </div>
      <Button className="border-stone-700 bg-stone-700 w-1/2 ml-80 my-4" variant='ghost' type="submit">Crear Registro</Button>
    </form>
  );
}
