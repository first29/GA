"use client"
import { Input, Button } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"

export default function CrearUsuario() {
  const { reset, register, watch, control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      dni: "¿",
      nombres: "¿",
      cod_proyecto: "¿"
    }
  });
  const onSubmit = handleSubmit(async() => {
    try {
      const res = await axios.post("api/usuarios/"+watch("dni")+"/"+watch("nombres")+"/"+watch("cod_proyecto"))
      console.log(res.data)
    } catch (err) {
      reset()
      alert(err)
    }
  })
  return (
    <form className='grid ml-96' onSubmit={onSubmit}>
      <div className='flex mb-4'>
        <Input className="mx-4 border-stone-700 w-1/5" name="dni" label="DNI-Cedula" {...register("dni", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 border-stone-700 w-1/5" name="nombres" label="Nombres" {...register("nombres", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 border-stone-700 w-1/5" name="cod_proyecto" label="Codigo de Proyecto" {...register("cod_proyecto", { required: { value: true, message: "Este campo es requerido" } })} />
      </div>
      <Button className="border-stone-700 bg-stone-700 w-1/2 ml-32 " variant='ghost' type="submit">Crear Usuario</Button>
    </form>
  )
}
