import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: "servicioextendido@canvia.com",
        pass: "Cambio#2025",
        sendImmediately: true,
    }
});
export async function enviarCorreo(destinatario, asunto, contenido, cc) {
    const cont = generarTablaActivos(contenido);
    console.log("se envia el correo " + asunto);
    const info = await transporter.sendMail({
        from: "servicioextendido@canvia.com",
        to: destinatario,
        cc: cc,
        subject: asunto,
        html: cont,
        attachments: [
            {
                filename: 'logo_canvia.png',
                path: '../componentes/logo_canvia.png',
                cid: 'logo'
            }
        ]
    })
    console.log("Message sent: %s", info.messageId);
};

const firma = `</tr>
                </tbody>
                </table>
                <br/>
                <p>Saludos Cordiales.</p>
                <p>servicioextendido@canvia.com – www.canvia.com<p>
                <p>Jirón Chota 998, Cercado de Lima<p>
                
                <img src="cid:logo" />
                `;

function generarTablaActivos(activos) {
    let tabla = `<h2>Lista de Activos Solicitada:</h2>
     <table style="border-collapse: collapse; max-width: 600px; width: 100%;">
    <thead>
    <tr>
    `;

    const propiedades = Object.keys(activos[0]);
    propiedades.forEach(propiedad => {
        tabla += ` <th style="border: 1px solid #ddd; padding: 8px;">${propiedad}</th>
        `
    })
    tabla += `
    </tr >
    </thead >
        <tbody>
    `
    const formateo = (fecha) => {
        let nfecha
        fecha != null ? (nfecha = new Date(fecha).toLocaleString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })) : (nfecha = "s/n")
        return nfecha
    }

    activos.forEach((activo) => {
        tabla += '<tr>';
        activo.fechaAdquisicion = formateo(activo.fechaAdquisicion)
        activo.fecha_ingreso = formateo(activo.fecha_ingreso)
        activo.fecha_salida = formateo(activo.fecha_salida)
        for (const propiedad in activo) {
            if (activo.hasOwnProperty(propiedad)) {
                tabla += `<td style = "border: 1px solid #ddd; padding: 8px;" > ${activo[propiedad]}</td>
                `
            }
        }
    });

    tabla += firma;
    return tabla;
};