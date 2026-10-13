import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is missing");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default resend;