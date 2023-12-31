import { NextResponse } from "next/server"
import { cnn } from "../../conexion/database"

export async function GET(req, { params }) {
    try {
        const result = await cnn.query("select * from vista_equipo where activo=?",params.activo)
        if (result[0].length === 0) return NextResponse.json({ message: "no se encontro el activo" }, { status: 404 })
        else return NextResponse.json(result[0]);
    } catch (err) {
        return NextResponse.json({ err });
    }
}
