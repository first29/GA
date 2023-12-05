import { NextResponse } from "next/server"
import {cnn} from "../conexion/database"

export function GET() {
    return NextResponse.json({message: "hola mundo"})
}

export function POST() {
    return NextResponse.json({message: "hola mundo"})
}