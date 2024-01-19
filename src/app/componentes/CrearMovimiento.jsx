"use client"
import { Input, Button, Textarea, SelectItem, Select as Select2 } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { Select } from 'antd';

// Define el componente para la creación de registros
export default function CrearMovimiento() {
  const [userData, setUserData] = useState({ usuarios: [], tickets: [] });
  const { reset, control, register, watch, handleSubmit, errors } = useForm({
    defaultValues: {
      tipo: "¿",
      fecha: "¿",
      usuario: "¿",
      ticket: "¿",
      motivo: "¿",
      observacion: "¿",
      inconveniente: "¿",
      accesorio: "¿",
      activo: "¿",
    },
  })
  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const fetching = async () => {
    try {
      const [tiResponse, usResponse] = await Promise.all([
        axios.get('api/usuarios'),
        axios.get('api/equipos/activo')
      ]);
      setUserData({ activos: usResponse.data, usuarios: tiResponse.data });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  // Manejador para la presentación del formulario
  const onSubmit = handleSubmit(async () => {
    try {
      console.log(watch())
      const res = await axios.post('api/movimiento/' + watch("tipo") + "/" + watch("fecha") + "/" + watch("usuario") + "/" + watch("ticket") + "/" + watch("motivo") + "/" + watch("observacion") + "/" + watch("inconveniente") + "/" + watch("accesorio") + "/" + watch("activo"))
      alert(res.data)
    } catch (err) {
      reset()
      alert(err)
    }
  })
  const tipos = [
    { label: "Ingreso", value: "Ingreso" },
    { label: "Salida", value: "Salida" }
  ]

  return (
    <form className='grid ml-32' onSubmit={onSubmit}>
      <div className='flex flex-wrap -mx-4'>
        <Controller
          control={control}
          name="activo"
          defaultValue=""
          className="rounded-full"
          render={({ field }) => (
            <Select
              showSearch
              allowClear
              placeholder="Codigo de Activo"
              optionFilterProp="children"
              filterOption={filterOption}
              onChange={(value) => field.onChange(value)}
              listHeight={160}
              className="h-1/3 w-1/6 mt-1.5 p-1 rounded-full"
              popupClassName="bg-stone-300"
              options={userData.activos}
            />
          )}
        />
        <Select2 label="Tipo" className="mx-4 my-2 w-1/6 "  {...register("tipo", { required: { value: true, message: "Este campo es requerido" } })}>
          <SelectItem key="Ingreso" value="Ingreso">Ingreso</SelectItem>
          <SelectItem key="Salida" value="Salida">Salida</SelectItem>
        </Select2>
        <Input className="mx-4 my-2 w-1/6" name="fecha" type="date" labelPlacement="outside" placeholder="¿" label={"Fecha" + (watch("tipo") != "¿" ? (watch("tipo") == "Ingreso" ? "de Ingreso" : "de Salida") : "")} {...register("fecha", { required: { value: true, message: "Este campo es requerido" } })} />
        <Controller
          control={control}
          name="usuario"
          defaultValue=""
          className="rounded-full"
          render={({ field }) => (
            <Select
              showSearch
              allowClear
              placeholder="Select usuario"
              optionFilterProp="children"
              filterOption={filterOption}
              onChange={(value) => field.onChange(value)}
              listHeight={160}
              className="h-1/3 w-1/6 mt-1.5 p-1 rounded-full"
              popupClassName="bg-stone-300"
              options={userData.usuarios}
            />
          )}
        />
        <Input className="mx-4 my-2 w-1/6" name="ticket" label="Ticket" {...register("ticket", { required: { value: true, message: "Este campo es requerido" } })} />
        <Textarea className="mx-4 my-2 w-1/6" name="motivo" label="Motivo" {...register("motivo", { required: { value: true, message: "Este campo es requerido" } })} />
        <Textarea className="mx-4 my-2 w-1/6" name="observacion" label="Observación" {...register("observacion")} />
        <Textarea className="mx-4 my-2 w-1/6" name="inconveniente" label="Inconveniente" {...register("inconveniente")} />
        <Textarea className="mx-4 my-2 w-1/6" name="accesorio" label="Accesorio" {...register("accesorio")} />
      </div>
      <Button className="border-stone-700 bg-stone-700 w-1/2 mx-40 my-4" variant='ghost' type="submit">Crear Registro</Button>
    </form>
  )
}
