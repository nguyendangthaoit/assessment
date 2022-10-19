import * as nodemailer from 'nodemailer';

export async function SendEmailHelper(emailTo: string, subject: string, content: string, contentHtml: string) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_SEND,
            pass: process.env.EMAIL_PASS
        },
    });

    let mailOptions = {
        from: process.env.EMAIL_SEND,
        to: emailTo,
        subject: subject,
        text: content,
        html: contentHtml
    };
    return await transporter.sendMail(mailOptions);
}