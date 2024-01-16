import { Input, Button } from "@nextui-org/react";
import { Select } from 'antd';
import axios from "axios";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

const Filtros = ({ register, setMore, more, getValues, control }) => {
    const [userData, setUserData] = useState({ usuarios: [], tickets: [] });
    const [serie, setSerie] = useState("");
    const [etiqueta, setEtiqueta] = useState("");

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

    const handleInputChange = (e, setValue) => {
        const value = e.target.value.trim();
        setValue(value === '' ? "¿" : value);
        console.log(value)
      };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const boton = () => {
        setMore(!more);
    };

    useEffect(() => {
        fetching();
    }, []); // Este efecto se ejecuta solo una vez al montar el componente

    return (
        <div className="flex gap-2">
            <Input defaultValue='¿' className="mx-1" {...register("serie")} label="Serie" value={serie === "¿" ? "" : serie}  onChange={(e) => handleInputChange(e, setSerie)}>Serie </Input>
            <Controller
                control={control}
                name="ticket"
                render={({ field }) => (
                    <Select
                        clearBg="#F4F4F4"
                        showSearch
                        allowClear
                        placeholder="Select ticket"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        onChange={(value) => field.onChange(value)}
                        listHeight={160}
                        className="h-auto rounded-full"
                        popupClassName="bg-stone-300"
                        options={userData.tickets}
                    />
                )}
            />
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
            <Input
                className="mx-1 "
                {...register("etiqueta")}
                label="Etiqueta"
                value={etiqueta=== "¿" ? "" : etiqueta}
                onChange={(e) => handleInputChange(e, setEtiqueta)}
            >Etiqueta</Input>

            <Button className="mx-2 bg-stone-700 text-white h-auto w-2/5" variant="ghost" onClick={boton}>
                Quitar filtros
            </Button>

        </div>
    );
};

export default Filtros;
