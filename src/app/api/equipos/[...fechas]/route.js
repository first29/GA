import { NextResponse } from "next/server"
import { cnn } from "../../conexion/database"

export async function GET(req, { params }) {
    const fma=params.fechas[0]
    const fme=params.fechas[1]
    try {
        const result = await cnn.query("select * from vista_equipo where fechaAdquisicion<=? and fechaAdquisicion>=?",[fma,fme])
        if (result[0].length === 0) return NextResponse.json({ message: "no se encontraron el activos" }, { status: 404 })
        else return NextResponse.json(result[0]);
    } catch (err) {
        return NextResponse.json({ err });
    }
}

export async function POST(req, { params }) {
    const fma=params.fechas[0]
    const fme=params.fechas[1]
    try {
        const result = await cnn.query("select * from vista_equipo where fechaAdquisicion<=? and fechaAdquisicion>=?",[fma,fme])
        if (result[0].length === 0) return NextResponse.json({ message: "no se encontraron el activos" }, { status: 404 })
        else return NextResponse.json(result[0]);
    } catch (err) {
        return NextResponse.json({ err });
    }
}

