import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PaletteColorService } from 'src/palette/palette_color/palette_color.service';

@Injectable()
export class PaletteExistsGuard implements CanActivate {
  constructor(private paletteColorService: PaletteColorService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    await this.paletteColorService.checkExistsPaletteForUser(
      request.params.paletteId,
      request.user.id,
    );
    return true;
  }
}
