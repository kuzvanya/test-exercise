import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    request['session_token'] =
      request.headers.authtoken ||
      request.query.authtoken ||
      request.cookies?.authtoken;
    if (!request['session_token']) {
      throw new UnauthorizedException('unauthorized');
    }
    try {
      const user = await this.authService.authBySessionToken(
        request['session_token'],
      );
      request.user = user;
    } catch {
      throw new UnauthorizedException('unauthorized');
    }
    return true;
  }
}
