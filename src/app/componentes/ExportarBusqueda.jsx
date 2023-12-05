import { Input, Button } from "@nextui-org/react"

function ExportarBusqueda() {
    return (
        <div className="grid">
            <form className="flex">
                <Input type="Date" className="p-1">Fecha Inicio</Input>
                <Input type="Date" className="p-1">Fecha Fin</Input>
                <Button type="submit"className="">Exportar</Button>
            </form>
        </div>
    )
}

export default ExportarBusqueda