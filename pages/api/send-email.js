import nodemailer from 'nodemailer';

export default async function SendEmail(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      // Configura el transporte de nodemailer
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'maurorl200318@gmail.com',
          pass: 'mauricio200304',
        },
      });

      // Configura el correo electrónico
      const mailOptions = {
        from: email, // El remitente es el correo del usuario
        to: 'digital@marabunta.co', // El destinatario es tu correo
        subject: 'Prueba Técnica FS Marabunta', // Asunto del correo
        text: `Nombre: ${name}\nTeléfono: ${phone}\nMensaje: ${message}`, // Cuerpo del correo
      };

      // Envía el correo electrónico
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ error: 'Hubo un error al enviar el correo electrónico' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
