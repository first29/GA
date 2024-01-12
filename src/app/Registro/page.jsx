import CrearUsuario from "../componentes/CrearUsuario"
import { Input, Button } from "@nextui-org/react"

export const metadata = {
    title: 'GA Registro',
}
const page = () => {

    return (
        <div>
            <div>
                <h1>Crear Usario</h1>
                <p>----------------------------</p>
                <CrearUsuario />
                <p>----------------------------</p>
            </div>
            <div>
                <h1>Crear Ubicacion</h1>
                <p>----------------------------</p>
                <form className='flex'>
                    <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="Empresa"></Input>
                    <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="Empresa"></Input>
                    <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="Empresa"></Input>
                    <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="Empresa"></Input>
                    <Input className="mx-4 border-stone-700 w-1/5" name="Empresa" label="Empresa"></Input>
                </form>
                <p>----------------------------</p>
            </div>
            <div>
                <h1>Crear Equipo</h1>
                <p>----------------------------</p>
            </div>
            <div>
                <h1>Crear Movimiento</h1>
                <p>----------------------------</p>
            </div>
        </div>
    )
}

export default page