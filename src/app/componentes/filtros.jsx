import { Input, Button } from "@nextui-org/react";
import { Select } from 'antd';
import axios from "axios";
import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

const Filtros = ({ register, setMore, more, getValues, control }) => {
    const [userData, setUserData] = useState({ usuarios: [], tickets: [] });
    const [usuario, setUsuario] = useState("");
    const [ticket, setTicket] = useState("");
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
            <Input className="mx-1" {...register("serie")} label="Serie" value={serie} onChange={(e) => setSerie(e.target.value)}>Serie </Input>
            <Controller
                control={control}
               
                name="ticket"
                defaultValue=""
                render={({ field }) => (
                    <Select
                        showSearch
                        placeholder="Select ticket"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        onChange={(value) => field.onChange(value)}
                        listHeight={160}
                        className="h-auto border-stone-300  "
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
                        placeholder="Select usuario"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        onChange={(value) => field.onChange(value)}
                        listHeight={160}
                        className="h-auto border-stone-300"
                        popupClassName="bg-stone-300"
                        options={userData.usuarios}
                    />
                )}
                className="h-auto hover:color-stone-300"
            />
            <Input
                className="mx-1 "
                {...register("etiqueta")}
                label="Etiqueta"
                value={etiqueta}
                onChange={(e) => setEtiqueta(e.target.value)}
            >Etiqueta</Input>

            <Button className="mx-2 bg-stone-700 text-white h-auto w-2/5" variant="ghost" onClick={boton}>
                Quitar filtros
            </Button>

        </div>
    );
};

export default Filtros;
