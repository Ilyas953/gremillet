import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstname, lastname, phone, countryCode, email, travaux, autreDetail, message } = body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 6px; overflow: hidden;">
      <div style="background: #3958A8; padding: 24px 32px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Nouvelle demande de devis</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">Ent. GREMILLET – Couvreur 92</p>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px; width: 140px;">Nom</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${firstname} ${lastname}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Téléphone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${countryCode} ${phone}</td>
          </tr>
          ${email ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 13px;">Type de travaux</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${travaux}${autreDetail ? ` – ${autreDetail}` : ""}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      </div>
      <div style="background: #f5f5f5; padding: 16px 32px; text-align: center;">
        <a href="tel:${countryCode.replace("+", "00")}${phone.replace(/\s/g, "")}"
           style="display: inline-block; background: #BB1E24; color: #fff; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 15px;">
          Rappeler le client
        </a>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Site Ent. GREMILLET" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Devis – ${travaux} | ${firstname} ${lastname}`,
    html: htmlEmail,
    replyTo: email || undefined,
  });

  return Response.json({ ok: true });
}
