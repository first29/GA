import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req, res, next) {
    const cookieStore = cookies();
    const token = cookieStore.get("myTokenName")
    if (token==null) return NextResponse.json({ message: "no autorizado" }, { status: 401 })
    const { value } = token

}