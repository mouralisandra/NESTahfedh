import { Controller, Post, Body, Req, UseGuards, Get, Inject } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { AuthGuard } from "./auth-jwt.guard";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MailService } from './mail/mail.service';

@ApiTags('auth')
@Controller()
export class AuthController {
    constructor(
        private authService: AuthService,
        private mailService: MailService
    ) {}

    @Post('login')
    @ApiBody({type: LoginUserDto})
    @ApiResponse({
        status: 200,
        description: 'login user and return token',
        type: String
    })
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.login(loginUserDto)
    }

    @Post('register')
    @ApiBody({type: CreateUserDto})
    @ApiResponse({
        status: 200,
        description: 'register user and return token',
        type: String
    })
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.authService.register(createUserDto);

        // Send a welcome email
        const mailOptions = {
            from: '"NESTahfedh" <nestahfedh@gmail.com>', // Your email address
            to: createUserDto.email,
            subject: "Welcome to NESTahfedh - Your Gateway to Buying and Selling Used Products",
            text: "Thank you for registering. Welcome to our service!",
            html: `<html>
            <head>
                <title>Welcome to NESTahfedh</title>
            </head>
            <body>
                <h2>Dear ${createUserDto.username},</h2>
                <p>Welcome to NESTahfedh, your new home for buying and selling used products! We're glad to have you on board.</p>
                <p>Get started exploring categories, posting listings, or buying unique items. If you have any questions, our support team is ready to assist you.</p>
                <p>Happy shopping and selling!</p>
                <p><strong>Best,</strong></p>
                <p>The NESTahfedh Team</p>
            </body>
            </html>`,
        };

        await this.mailService.sendMail(mailOptions);

        return user;
    }

    @UseGuards(AuthGuard)
    @Get('check')
    async checkAuth(@Req() req) {
        return await this.authService.checkAuth(req.user)
    }
}
