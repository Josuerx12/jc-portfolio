import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().email("Email inválido").min(5, "Email é obrigatório"),
  subject: z
    .string()
    .min(5, "Assunto deve ter pelo menos 5 caracteres")
    .max(150, "Assunto deve ter no máximo 150 caracteres"),
  message: z
    .string()
    .min(20, "Mensagem deve ter pelo menos 20 caracteres")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
