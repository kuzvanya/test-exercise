import { Test, TestingModule } from '@nestjs/testing';
import { PaletteColorService } from './palette_color.service';

describe('PaletteColorService', () => {
  let service: PaletteColorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaletteColorService],
    }).compile();

    service = module.get<PaletteColorService>(PaletteColorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
