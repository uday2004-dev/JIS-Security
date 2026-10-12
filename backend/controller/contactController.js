import transporter from "../config/mail.js";

export const sendContactEmail = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      service,
      location,
      message,
    } = req.body;

    if (!name || !email || !phone || !service || !location) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Service Enquiry - ${service}`,

      html: `
        <h2>New Service Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Your enquiry has been sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};