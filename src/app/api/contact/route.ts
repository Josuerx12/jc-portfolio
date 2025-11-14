import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { z } from "zod";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validatedData = contactSchema.parse(body);

    await prisma.lead.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `🚀 Novo Lead: ${validatedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nova Mensagem de Contato</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <div style="max-width: 600px; margin: 40px auto; background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
                🎉 Novo Lead Capturado!
              </h1>
              <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
                Alguém está interessado no seu trabalho
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px; background-color: #1a1a1a;">
              
              <!-- Informações do Lead -->
              <div style="background-color: #2d2d2d; border-left: 4px solid #7c3aed; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 20px; color: #a78bfa; font-size: 18px; font-weight: 600;">
                  📋 Informações do Contato
                </h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(167, 139, 250, 0.1);">
                      <span style="color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Nome</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0 16px;">
                      <span style="color: #ffffff; font-size: 16px; font-weight: 500;">${
                        validatedData.name
                      }</span>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(167, 139, 250, 0.1);">
                      <span style="color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0 16px;">
                      <a href="mailto:${
                        validatedData.email
                      }" style="color: #a78bfa; font-size: 16px; text-decoration: none; font-weight: 500;">
                        ${validatedData.email}
                      </a>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid rgba(167, 139, 250, 0.1);">
                      <span style="color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Assunto</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;">
                      <span style="color: #ffffff; font-size: 16px; font-weight: 500;">${
                        validatedData.subject
                      }</span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Mensagem -->
              <div style="background-color: #2d2d2d; border-left: 4px solid #10b981; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px; color: #10b981; font-size: 18px; font-weight: 600;">
                  💬 Mensagem
                </h2>
                <p style="margin: 0; color: #d1d5db; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${
                  validatedData.message
                }</p>
              </div>

              <!-- Call to Action -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${
                  validatedData.email
                }?subject=Re: ${encodeURIComponent(validatedData.subject)}" 
                   style="display: inline-block; background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4); transition: transform 0.2s;">
                  📧 Responder Agora
                </a>
              </div>

              <!-- Informações Adicionais -->
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(167, 139, 250, 0.1);">
                <p style="margin: 0 0 8px; color: #9ca3af; font-size: 13px;">
                  <strong style="color: #a78bfa;">📅 Data:</strong> ${new Date().toLocaleString(
                    "pt-BR",
                    {
                      dateStyle: "full",
                      timeStyle: "short",
                      timeZone: "America/Sao_Paulo",
                    }
                  )}
                </p>
                <p style="margin: 0; color: #9ca3af; font-size: 13px;">
                  <strong style="color: #a78bfa;">🔗 Origem:</strong> jcdev.com.br/contato
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #0a0a0a; padding: 24px 30px; text-align: center; border-top: 1px solid rgba(167, 139, 250, 0.1);">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">
                Este email foi enviado automaticamente pelo seu portfólio
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                💼 <strong style="color: #a78bfa;">JCDev</strong> | Desenvolvedor Fullstack
              </p>
            </div>
          </div>

          <!-- Dica de Resposta Rápida -->
          <div style="max-width: 600px; margin: 20px auto; padding: 16px; background-color: rgba(124, 58, 237, 0.1); border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.2);">
            <p style="margin: 0; color: #a78bfa; font-size: 13px; text-align: center;">
              💡 <strong>Dica:</strong> Responda nas primeiras 24 horas para aumentar a taxa de conversão!
            </p>
          </div>
        </body>
        </html>
      `,
      replyTo: validatedData.email,
    });

    console.log("📧 Mensagem recebida:", validatedData);

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem enviada com sucesso!",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Dados inválidos",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    console.error("Erro ao processar contato:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar mensagem. Tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }
}
