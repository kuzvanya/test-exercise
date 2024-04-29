import { Test, TestingModule } from '@nestjs/testing';
import { PaletteColorController } from './palette_color.controller';

describe('PaletteColorController', () => {
  let controller: PaletteColorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaletteColorController],
    }).compile();

    controller = module.get<PaletteColorController>(PaletteColorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
