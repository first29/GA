"use client"
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { Select } from 'antd';

// Define el componente para la creación de registros
export default function CrearMovimiento() {
  const [userData, setUserData] = useState({ usuarios: [], tickets: [] });
  const { reset, control, register, watch, handleSubmit } = useForm({
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
  const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const fetching = async () => {
    try {
      const [tiResponse, usResponse] = await Promise.all([
        axios.get('api/ticket'),
        axios.get('api/usuarios')
      ]);
      setUserData({ usuarios: usResponse.data, tickets: tiResponse.data });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetching();
  }, []); // Este efecto se ejecuta solo una vez al montar el componente

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
  const tipos = [
    { label: "Ingreso", value: "Ingreso" },
    { label: "Salida", value: "Salida" }
  ]

  return (
    <form className='grid ml-32' onSubmit={onSubmit}>
      <div className='flex flex-wrap -mx-4'>
        <Input className="mx-4 my-2 w-1/6" name="activo" label="Activo" {...register("activo", { required: { value: true, message: "Este campo es requerido" } })} />
        <Controller
          control={control}
          name="tipo"
          defaultValue=""
          render={({ field }) => (
            <Select
              allowClear
              placeholder="Select tipo"
              optionFilterProp="children"
              filterOption={filterOption}
              className="h-auto"
              popupClassName="bg-stone-300"
              options={tipos}
            />
          )}
        />
        <Input className="mx-4 my-2 w-1/6" name="fecha" type="date" labelPlacement="outside" placeholder="¿" label="Fecha" {...register("fecha", { required: { value: true, message: "Este campo es requerido" } })} />

        <Controller
          control={control}
          name="usuario"
          defaultValue=""
          render={({ field }) => (
            <Select
              showSearch
              allowClear
              placeholder="Select usuario"
              optionFilterProp="children"
              filterOption={filterOption}
              onChange={(value) => field.onChange(value)}
              listHeight={160}
              className="h-auto"
              popupClassName="bg-stone-300"
              options={userData.usuarios}
            />
          )}
        />
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
