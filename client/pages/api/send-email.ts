
/* eslint-disable import/no-anonymous-default-export */
import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'

async function sendEmail(req, res) {

    const { formContents } = req.body;
    console.log(req.body)

    if (!req.body.email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const { organization, firstName, lastName, email, address, shippingAddress, numberOfBooks, phone } = req.body
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
            to: ['tzlukoma@gmail.com, ssanyuspeaks@gmail.com, llukoma@gmail.com'],
            from: 'tzlukoma@morethanahut.com',
            subject: `'New Bulk Order from ${firstName} ${lastName} - ${organization}'`,
            html: `
            <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" style="color-scheme: light dark; supported-color-schemes: light dark;">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <title></title>
    <style type="text/css" rel="stylesheet" media="all">
        /* Base ------------------------------ */

        @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");

        body {
            width: 100% !important;
            height: 100%;
            margin: 0;
            -webkit-text-size-adjust: none;
        }

        a {
            color: #3869D4;
        }

        a img {
            border: none;
        }

        td {
            word-break: break-word;
        }

        .preheader {
            display: none !important;
            visibility: hidden;
            mso-hide: all;
            font-size: 1px;
            line-height: 1px;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
        }

        /* Type ------------------------------ */

        body,
        td,
        th {
            font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
        }

        h1 {
            margin-top: 0;
            color: #333333;
            font-size: 22px;
            font-weight: bold;
            text-align: left;
        }

        h2 {
            margin-top: 0;
            color: #333333;
            font-size: 16px;
            font-weight: bold;
            text-align: left;
        }

        h3 {
            margin-top: 0;
            color: #333333;
            font-size: 14px;
            font-weight: bold;
            text-align: left;
        }

        td,
        th {
            font-size: 16px;
        }

        p,
        ul,
        ol,
        blockquote {
            margin: .4em 0 1.1875em;
            font-size: 16px;
            line-height: 1.625;
        }

        p.sub {
            font-size: 13px;
        }

        /* Utilities ------------------------------ */

        .align-right {
            text-align: right;
        }

        .align-left {
            text-align: left;
        }

        .align-center {
            text-align: center;
        }

        /* Buttons ------------------------------ */

        .button {
            background-color: #3869D4;
            border-top: 10px solid #3869D4;
            border-right: 18px solid #3869D4;
            border-bottom: 10px solid #3869D4;
            border-left: 18px solid #3869D4;
            display: inline-block;
            color: #FFF;
            text-decoration: none;
            border-radius: 3px;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
            -webkit-text-size-adjust: none;
            box-sizing: border-box;
        }

        .button--green {
            background-color: #22BC66;
            border-top: 10px solid #22BC66;
            border-right: 18px solid #22BC66;
            border-bottom: 10px solid #22BC66;
            border-left: 18px solid #22BC66;
        }

        .button--red {
            background-color: #FF6136;
            border-top: 10px solid #FF6136;
            border-right: 18px solid #FF6136;
            border-bottom: 10px solid #FF6136;
            border-left: 18px solid #FF6136;
        }

        @media only screen and (max-width: 500px) {
            .button {
                width: 100% !important;
                text-align: center !important;
            }
        }

        /* Attribute list ------------------------------ */

        .attributes {
            margin: 0 0 21px;
        }

        .attributes_content {
            background-color: #F4F4F7;
            padding: 16px;
        }

        .attributes_item {
            padding: 0;
        }

        /* Related Items ------------------------------ */

        .related {
            width: 100%;
            margin: 0;
            padding: 25px 0 0 0;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
        }

        .related_item {
            padding: 10px 0;
            color: #CBCCCF;
            font-size: 15px;
            line-height: 18px;
        }

        .related_item-title {
            display: block;
            margin: .5em 0 0;
        }

        .related_item-thumb {
            display: block;
            padding-bottom: 10px;
        }

        .related_heading {
            border-top: 1px solid #CBCCCF;
            text-align: center;
            padding: 25px 0 10px;
        }

        /* Discount Code ------------------------------ */

        .discount {
            width: 100%;
            margin: 0;
            padding: 24px;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
            background-color: #F4F4F7;
            border: 2px dashed #CBCCCF;
        }

        .discount_heading {
            text-align: center;
        }

        .discount_body {
            text-align: center;
            font-size: 15px;
        }

        /* Social Icons ------------------------------ */

        .social {
            width: auto;
        }

        .social td {
            padding: 0;
            width: auto;
        }

        .social_icon {
            height: 20px;
            margin: 0 8px 10px 8px;
            padding: 0;
        }

        /* Data table ------------------------------ */

        .purchase {
            width: 100%;
            margin: 0;
            padding: 35px 0;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
        }

        .purchase_content {
            width: 100%;
            margin: 0;
            padding: 25px 0 0 0;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
        }

        .purchase_item {
            padding: 10px 0;
            color: #51545E;
            font-size: 15px;
            line-height: 18px;
        }

        .purchase_heading {
            padding-bottom: 8px;
            border-bottom: 1px solid #EAEAEC;
        }

        .purchase_heading p {
            margin: 0;
            color: #85878E;
            font-size: 12px;
        }

        .purchase_footer {
            padding-top: 15px;
            border-top: 1px solid #EAEAEC;
        }

        .purchase_total {
            margin: 0;
            text-align: right;
            font-weight: bold;
            color: #333333;
        }

        .purchase_total--label {
            padding: 0 15px 0 0;
        }

        body {
            background-color: #F2F4F6;
            color: #51545E;
        }

        p {
            color: #51545E;
        }

        .email-wrapper {
            width: 100%;
            margin: 0;
            padding: 0;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
            background-color: #F2F4F6;
        }

        .email-content {
            width: 100%;
            margin: 0;
            padding: 0;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
        }

        /* Masthead ----------------------- */

        .email-masthead {
            padding: 25px 0;
            text-align: center;
        }

        .email-masthead_logo {
            width: 94px;
        }

        .email-masthead_name {
            font-size: 16px;
            font-weight: bold;
            color: #A8AAAF;
            text-decoration: none;
            text-shadow: 0 1px 0 white;
        }

        /* Body ------------------------------ */

        .email-body {
            width: 100%;
            margin: 0;
            padding: 0;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
        }

        .email-body_inner {
            width: 570px;
            margin: 0 auto;
            padding: 0;
            -premailer-width: 570px;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
            background-color: #FFFFFF;
        }

        .email-footer {
            width: 570px;
            margin: 0 auto;
            padding: 0;
            -premailer-width: 570px;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
            text-align: center;
        }

        .email-footer p {
            color: #A8AAAF;
        }

        .body-action {
            width: 100%;
            margin: 30px auto;
            padding: 0;
            -premailer-width: 100%;
            -premailer-cellpadding: 0;
            -premailer-cellspacing: 0;
            text-align: center;
        }

        .body-sub {
            margin-top: 25px;
            padding-top: 25px;
            border-top: 1px solid #EAEAEC;
        }

        .content-cell {
            padding: 45px;
        }

        /*Media Queries ------------------------------ */

        @media only screen and (max-width: 600px) {

            .email-body_inner,
            .email-footer {
                width: 100% !important;
            }
        }

        @media (prefers-color-scheme: dark) {

            body,
            .email-body,
            .email-body_inner,
            .email-content,
            .email-wrapper,
            .email-masthead,
            .email-footer {
                background-color: #333333 !important;
                color: #FFF !important;
            }

            p,
            ul,
            ol,
            blockquote,
            h1,
            h2,
            h3,
            span,
            .purchase_item {
                color: #FFF !important;
            }

            .attributes_content,
            .discount {
                background-color: #222 !important;
            }

            .email-masthead_name {
                text-shadow: none !important;
            }
        }

        :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
        }
    </style>
    <!--[if mso]>
    <style type="text/css">
      .f-fallback  {
        font-family: Arial, sans-serif;
      }
    </style>
  <![endif]-->
</head>

<body style="width: 100%; height: 100%; margin: 0; -webkit-text-size-adjust: none; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; background-color: #F2F4F6; color: #51545E;">
    <span class="preheader" style="display: none; visibility: hidden; mso-hide: all; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">You have a new bulk order inquiry from ${firstName} at ${organization}.</span>
    <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #F2F4F6;" bgcolor="#F2F4F6">
        <tr>
            <td align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                    <tr>
                        <td class="email-masthead" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 25px 0; text-align: center;" align="center">
                            <a href="https://example.com" class="f-fallback email-masthead_name" style="color: #A8AAAF; font-size: 16px; font-weight: bold; text-decoration: none; text-shadow: 0 1px 0 white;">
                                ssanyuspeaks.com internal communications
                            </a>
                        </td>
                    </tr>
                    <!-- Email Body -->
                    <tr>
                        <td class="email-body" width="100%" cellpadding="0" cellspacing="0" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; width: 100%; margin: 0; padding: 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                            <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; background-color: #FFFFFF;" bgcolor="#FFFFFF">
                                <!-- Body content -->
                                <tr>
                                    <td class="content-cell" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 45px;">
                                        <div class="f-fallback">
                                            <h1 style="margin-top: 0; color: #333333; font-size: 22px; font-weight: bold; text-align: left;">Hey Team,</h1>
                                            <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">You have a new inquiry about bulk orders of Suubi's Sunny Smile.</p>
                                            <!-- Discount -->

                                            <table class="purchase" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%; margin: 0; padding: 35px 0; -premailer-width: 100%; -premailer-cellpadding: 0; -premailer-cellspacing: 0;">
                                                <tr>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Organization:</p>
                                                    </td>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${organization}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">First Name:</p>
                                                    </td>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${firstName}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Last Name:</p>
                                                    </td>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${lastName}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Email:</p>
                                                    </td>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${email}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Phone:</p>
                                                    </td>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${phone}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Address:</p>
                                                    </td>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${address}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Shipping Address:</p>
                                                    </td>
                                                    <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                        <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${shippingAddress}</strong></p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                    <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Number of Books:</p>
                                                </td>
                                                <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                                                    <p class="align-left" style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E; text-align: left;"><strong>${numberOfBooks}</strong></p>
                                                </td>
                                            </tr>
                                            </table>
                                            <p style="margin: .4em 0 1.1875em; font-size: 16px; line-height: 1.625; color: #51545E;">Sent Automatically,
                                                <br>Your beloved website
                                            </p>
                                            <!-- Sub copy -->
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px;">
                            <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="width: 570px; margin: 0 auto; padding: 0; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center;">
                                <tr>
                                    <td class="content-cell" align="center" style="word-break: break-word; font-family: 'Nunito Sans', Helvetica, Arial, sans-serif; font-size: 16px; padding: 45px;">
                                        <p class="f-fallback sub align-center" style="margin: .4em 0 1.1875em; line-height: 1.625; text-align: center; font-size: 13px; color: #A8AAAF;">&copy; 2021 ssanyuspeaks.com. All rights
                                            reserved.</p>
                                        <p class="f-fallback sub align-center" style="margin: .4em 0 1.1875em; line-height: 1.625; text-align: center; font-size: 13px; color: #A8AAAF;">
                                            Ssanyu Lukoma
                                            <br>778 Washington St
                                            <br>#321
                                            <br>Parlin, NJ 08859
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
            `
        };


        const result = await mailer.sendMail(emailBody)
        return res.status(201).json(result)

    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
};

export default sendEmail