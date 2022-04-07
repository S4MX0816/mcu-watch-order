import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class FilterMcuDto {
  @ApiPropertyOptional()
  page: number;

  @ApiPropertyOptional()
  limit: number;
}
