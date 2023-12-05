"use client"
import { Input, Button, ScrollShadow } from "@nextui-org/react"
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import * as XLSX from 'xlsx'

function ExportarBusqueda() {
    const [fma, setFma] = useState(null);
    const [fme, setFme] = useState(null);
    const form = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get('api/equipos/' + fma + '/' + fme)
            const data = res.data
            /* const formattedData = data.map((item) => ({
                 ...item,
                 fecha: new Date(item.fecha),
             }));*/
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
            const fileName = 'reporte_de_equipos.xlsx';
            XLSX.writeFile(workbook, fileName);
        } catch (err) {
            form.current.reset();
            console.error(err)
        }
    }
    const enviarCorreo = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('api/equipos/' + fma + '/' + fme)
            alert("correo enviado exitosamente");
        } catch (err) {
            form.current.reset();
            console.error(err)
        }
    }
    const handleChangeFecha = (e) => {
        if (e.name == "fme") setFme(e.value)
        if (e.name == "fma") setFma(e.value)
    };
    return (
        <div className="grid">
            <br />
            <form className="flex" onSubmit={handleSubmit} ref={form}>
                <Input type="Date" className="p-1" name="fme" onChange={(e) => handleChangeFecha(e.target)}>Fecha Inicio</Input>
                <Input type="Date" className="p-1" name="fma" onChange={(e) => handleChangeFecha(e.target)}>Fecha Fin</Input>
                <Button type="submit" className="p-6">Exportar</Button>
            </form>
            <Button variant="ghost" className="bg-stone-700" onClick={enviarCorreo}>enviar por correo</Button>
        </div >
    )
}

export default ExportarBusqueda