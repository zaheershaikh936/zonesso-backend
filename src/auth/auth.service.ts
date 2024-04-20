import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { UserService } from "src/user/user.service";
import { AuthDto } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private UserServiceInject: UserService,
    private JwtServiceService: JwtService,
  ) {}

  async SignIn(authBody: AuthDto) {
    const { email, password } = authBody;
    const isUserExist = await this.UserServiceInject.isExistEmail(email);
    if (!isUserExist)
      throw new UnauthorizedException({
        message: `email is in correct. Please check the email Id ${email} is not valid!`,
      });

    const isValid = await compare(password, isUserExist.password);
    if (!isValid)
      throw new UnauthorizedException({ message: "password is in correct" });

    delete isUserExist.password;

    return {
      description: "Login successfully!",
      title: "Success!",
      data: { id: isUserExist.id, email: isUserExist.email },
    };
  }

  async tokenGenerate(payload) {
    return {
      refresh_token: await this.JwtServiceService.signAsync(payload, {
        expiresIn: "6d",
      }),
      access_token: await this.JwtServiceService.signAsync(payload, {
        expiresIn: "12h",
      }),
    };
  }
}
