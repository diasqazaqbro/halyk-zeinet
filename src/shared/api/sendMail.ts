export async function sendMail(header: string, text: string) {
  const url = "https://mailer-dias.up.railway.app/send_mail/";

  const params = new URLSearchParams({
    send_to: "alikhantuleubaev815@gmail.com",
    header,
    text,
    MAIL_USERNAME: "alyauoverasyl@gmail.com",
    MAIL_SERVER: "smtp.gmail.com",
    MAIL_PORT: "465",
    MAIL_PASSWORD: "rrxu fzmh hnrp mzoe",
  });

  try {
    const response = await fetch(`${url}?${params.toString()}`, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Mail sent successfully:", data);
  } catch (error) {
    console.error("Error sending mail:", error);
  }
}
