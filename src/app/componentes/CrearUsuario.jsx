"use client"
import { Input, Button } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

export default function CrearUsuario() {
  const { reset, register, setValue, watch, getValues, control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      etiqueta: "¿",
      serie: "¿",
      ticket: "¿",
      usuario: "¿"
    }
  });
  return (
    <form className='grid ml-32'>
      <div className='flex mb-4'>
        <Input className="mx-4 border-stone-700 w-1/5" name="DNI" label="DNI"></Input>
        <Input className="mx-4 border-stone-700 w-1/5" name="Nombre" label="Nombre"></Input>
        <Input className="mx-4 border-stone-700 w-1/5" name="Codigo Empresa" label="Codigo Empresa"></Input>
      </div>
      <Button className="bg-stone-700 w-1/2 ml-32 basis-2/3" variant='ghost' type="submit">CrearUsuario</Button>
    </form>
  )
}
