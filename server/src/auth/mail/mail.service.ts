import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;
    
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", 
            port: 587,
            secure: false, 
            auth: {
                user: "nestahfedh@gmail.com", 
                pass: 'ipqhlbmqpgorycce',            },
        });
    }
    
    async sendMail(mailOptions: nodemailer.SendMailOptions) {
        return await this.transporter.sendMail(mailOptions);
    }
}
