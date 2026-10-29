import { ActionError, defineAction } from "astro:actions";
import {
    CONTACT_FROM_EMAIL,
    CONTACT_TO_EMAIL,
    RESEND_API_KEY,
} from "astro:env/server";
import { z } from "astro/zod";
import { Resend } from "resend";

const resend = new Resend(RESEND_API_KEY);

export const server = {
    sendContact: defineAction({
        accept: "form",
        input: z.object({
            nombre: z
                .string()
                .trim()
                .min(2, "Escribe tu nombre.")
                .max(100, "El nombre es demasiado largo."),
            correo: z.email("Escribe un correo válido."),
            mensaje: z
                .string()
                .trim()
                .min(10, "El mensaje debe tener al menos 10 caracteres.")
                .max(5000, "El mensaje es demasiado largo."),
            // Honeypot: real users never see or fill this field.
            empresa: z.string().optional(),
        }),
        handler: async ({ nombre, correo, mensaje, empresa }) => {
            if (empresa) return { ok: true };

            const { error } = await resend.emails.send({
                from: CONTACT_FROM_EMAIL,
                to: CONTACT_TO_EMAIL,
                replyTo: correo,
                subject: `Nuevo mensaje de ${nombre} desde el portafolio`,
                text: `Nombre: ${nombre}\nCorreo: ${correo}\n\n${mensaje}`,
            });

            if (error) {
                console.error("Resend no pudo enviar el mensaje:", error);
                throw new ActionError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "No se pudo enviar el mensaje.",
                });
            }

            return { ok: true };
        },
    }),
};
