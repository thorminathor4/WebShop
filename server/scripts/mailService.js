import nodemailer from "nodemailer";

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'firefastfoodmail@gmail.com',
        pass: 'PasswordPassword'
    }
});

export async function verifyMail(email){
    const result = mailTransporter.verify((error, success) => {
        if (error || !success) return reject(error);
        resolve(success);
    });
    return result;
}

export async function sendMail(email) {

    let mailDetails = {
        from: 'Fire Fastfood',
        to: email,
        subject: 'Welcome to Fire Fasfood',
        html:'<p>Thanks for signing up.<br>Visit the shop <a href="http://localhost:5678/">here</a>.</p>'
    };

    mailTransporter.sendMail(mailDetails, (error, success) => {
        if (error || !success) return reject(error);
        resolve(success);
    });
}