import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    proxy: process.env.http_proxy,
    auth: {
        user: "servicioextendido@canvia.com",
        pass: "Cambio#2025",
        sendImmediately: true,
    }
});
export async function enviarCorreo(destinatario, asunto, contenido, cc) {
    console.log("se envia el correo " + asunto);
    const info = await transporter.sendMail({
        from: "servicioextendido@canvia.com",
        to: destinatario,
        cc: cc,
        subject: asunto,
        html: contenido,
        attachments: [
            {
                filename: 'logo_canvia.png',
                path: '../componentes/logo_canvia.png',
                cid: 'logo'
            }
        ]
    });
    console.log("Message sent: %s", info.messageId);
};

const firma = `
                </table>
                <br/>
                <p>Saludos Cordiales.</p>
                <p>servicioextendido@canvia.com – www.canvia.com<p>
                <p>Jirón Chota 998, Cercado de Lima<p>
                </tbody>
                <img src="cid:logo" />
                `;

const generarTablaRelevos = (activos) => {
    let tabla = `
                    <h2>Lista de Activos Solicitada:</h2>
                    <table style="border-collapse: collapse; max-width: 600px; width: 100%;">
                      <colgroup>
                        <col style="width: 2%;">
                        <col style="width: 20%;">
                        <col style="width: 30%;">
                        <col style="width: 40%;">
                      </colgroup>
                      <thead>
                        <tr>
                          <th style="border: 1px solid #ddd; padding: 8px;">Fecha</th>
                          <th style="border: 1px solid #ddd; padding: 8px;">Ticket</th>
                          <th style="border: 1px solid #ddd; padding: 8px;">Especialista</th>
                          <th style="border: 1px solid #ddd; padding: 8px;">Resumen de Ticket</th>
                        </tr>
                      </thead>
                      <tbody>
                  `;
    const cabecera= ()=> {
        activos.forEach((activo) => {
            const fecha = new Date(activos.fecha).toLocaleString();
            tabla += `
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">${fecha}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${activo.ticket}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${activo.Especialista}</td>
                        <td style="border: 1px solid #ddd; padding: 8px;">${activo.Resumen}</td>
                    </tr>
                    `;
        });
    }
    activos.forEach((activo) => {
        const fecha = new Date(activos.fecha).toLocaleString();
        tabla += `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${fecha}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${activo.ticket}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${activo.Especialista}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${activo.Resumen}</td>
                </tr>
                `;
    });

    tabla += firma;

    return tabla;
};