import { Test, TestingModule } from '@nestjs/testing';
import { McuController } from './mcu.controller';

describe('McuController', () => {
  let controller: McuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [McuController],
    }).compile();

    controller = module.get<McuController>(McuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
