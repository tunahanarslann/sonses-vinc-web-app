import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Basit validasyon
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Tüm alanlar zorunludur." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "İletişim Formu <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL || "info@sonsesvinc.com",
      subject: `Yeni İletişim Formu: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #e67e22; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 120px;">Ad Soyad:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">E-posta:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">
                <a href="mailto:${email}" style="color: #e67e22;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Telefon:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">
                <a href="tel:${phone}" style="color: #e67e22;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Mesaj:</td>
              <td style="padding: 10px; color: #333; line-height: 1.6;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 10px;">
            Bu mesaj sonsesvinc.com iletişim formu üzerinden gönderilmiştir.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
