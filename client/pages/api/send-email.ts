
/* eslint-disable import/no-anonymous-default-export */
import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

async function sendEmail(req, res) {

    const { formContents } = req.body;
    console.log(req.body)

    if (!req.body.email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const { organization, firstName, lastName, email, address, phone } = req.body
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    const options = {
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    }

    const mailer = nodemailer.createTransport(sgTransport(options))

    try {

        const emailBody = {
            to: ['tzlukoma@gmail.com'],
            from: 'tzlukoma@morethanahut.com',
            subject: `'New Bulk Order from ${firstName} ${lastName} - ${organization}'`,
            html: `
            <p>You have a new bulk order request from</p>
            <div><span><strong>Organization:</strong> ${organization}</span></div>
            <div><span><strong>First Name:</strong> ${firstName}</span></div>
            <div><span><strong>Last Name:</strong> ${lastName}</span></div>
            <div><span><strong>Email:</strong> ${email}</span></div>
            <div><span><strong>Address:</strong> ${address}</span></div>
            <div><span><strong>Phone:</strong> ${phone}</span></div>
            `
        };


        const result = await mailer.sendMail(emailBody)
        return res.status(201).json(result)

    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};

export default sendEmail