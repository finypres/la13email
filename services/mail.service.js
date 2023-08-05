const nodemailer = require('nodemailer')

const { config } = require('../config/config')

class MailService {
  async sendMail(infoName, infoMail, infoPhone, infoMessage) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword
      }
    })

    await transporter.sendMail({
      from: infoMail,
      to: config.smtpEmail,
      bcc: config.emailConversion,
      subject: `${infoName} - Desde ${config.domain}`,
      text: `Teléfono: ${infoPhone} \n Mensaje: ${infoMessage}`
    })
    return { message: 'mail sent' }
  }
}

module.exports = MailService
