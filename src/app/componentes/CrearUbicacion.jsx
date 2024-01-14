"use client"
import { Input, Button } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"

export default function CrearUbicacion() {
  const { reset, register, watch, control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      dni: "¿",
      nombres: "¿",
      cod_proyecto: "¿"
    }
  });
  const onSubmit = handleSubmit(async() => {
    try {
      const res = await axios.post('api/usuarios/', watch())
      console.log(res.data)
    } catch (err) {
      reset()
      alert(err)
    }
  })
  return (
    <form className='grid' onSubmit={onSubmit}>
      <div className='flex mb-4'>
        <Input className="mx-4 border-stone-700 w-1/5" name="empresa" label="Empresa" {...register("empresa", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 border-stone-700 w-1/5" name="sede" label="Sede" {...register("sede", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 border-stone-700 w-1/5" name="almacen" label="Almacen" {...register("almacen", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 border-stone-700 w-1/5" name="sub_area" label="Sub Area" {...register("sub_area", { required: { value: true, message: "Este campo es requerido" } })} />
        <Input className="mx-4 border-stone-700 w-1/5" name="posicion" label="Posicion" {...register("posicion", { required: { value: true, message: "Este campo es requerido" } })} />
      </div>
      <Button className="border-stone-700 bg-stone-700 w-1/2 ml-96 " variant='ghost' type="submit">Crear Ubicacion</Button>
    </form>
  )
}
