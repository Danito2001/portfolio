import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
    return Response.json(
        { error: "Datos inválidos" },
        { status: 400 }
    )};

    try {

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "cnavarrodaniel18@gmail.com",
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p>${message}</p>
            `
        });

        return Response.json({ success: true });
    } catch {
        return Response.json(
            { success: false },
            { status: 500 }
        );
    }
}