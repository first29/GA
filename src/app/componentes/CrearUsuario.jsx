"use client"
import { Button } from "@nextui-org/react";
import { Input } from '@nextui-org/react'
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
    <form className='grid'>
      <div className='flex mb-4'>
        <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="DNI"></Input>
        <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="Empresa"></Input>
        <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="Empresa"></Input>
      </div>
      <Button className="bg-stone-700 border-stone-700 mx-8 basis-2/3" variant='ghost' type="submit">CrearUsuario</Button>
    </form>
  )
}
