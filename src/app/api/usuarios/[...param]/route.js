import { NextResponse } from "next/server"
import { cnn } from "../../conexion/database"
import { m } from "framer-motion"

export async function POST(req, { params }) {
    const dni=params.param[0]
    const nombres=params.param[1]
    const cod_proyecto=params.param[2]
    try {
        const result = await cnn.execute("call crear_usuario(?,?,?)", [dni, nombres, cod_proyecto])
        console.log(result.data)
        return NextResponse.json("usuario creado con exito")
    } catch (err) {
        return NextResponse.json("error al crear usuario");
    }
}