"use client"
import { useForm } from "react-hook-form"
import * as jwt from 'jwt-decode';
import axios from 'axios';
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";


export default function Login() {
    const { push } = useRouter()
    const { reset, register, unregister, watch, getValues, setValue } = useForm({
        defaultValues: {
            correo: "",
            contraseña: ""
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`api/auth/login/`, { correo: "rchacon@canvia.com", contraseña: "123456" })
            const { token } = res.data;
            console.log(token)
            push("/search")
        } catch (err) {
            alert(err)
        }
    };

    return (
        <form className="scale-90 my-40 bg-slate-800 h-96 w-96 mx-auto border rounded justify-items-center" onSubmit={handleSubmit}>
            <div className=" scale-75">
                <h1 className="text-4xl font-bold text-center text-stone-400 mb-8 mt-4">Iniciar Sesión</h1>


                <label htmlFor="correo" className="font-bold mb-4 text-stone-300">Correo Electrónico:</label>
                <Input variant="ghost" type="email" id="correo" {...register("correo")} className="w-full py-2 px-4 mb-4  border-stone-400 rounded" />

                <label htmlFor="contraseña" className="font-bold mb-4 text-stone-300">Contraseña:</label>
                <Input type="password" id="contraseña" {...register("contraseña")} className="w-full py-2 px-4 mb-4 border-stone-400 rounded" />

                <Button id="login-submit" variant="ghost" type="submit" className="w-48 ml-20 py-2 px-28 mt-4 bg-stone-600 text-white hover:stone-400" >Iniciar sesión</Button>
            </div>
        </form>

    );
};

