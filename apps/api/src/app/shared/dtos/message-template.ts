import { IsDefined, IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { StepTypeEnum, IEmailBlock, ITemplateVariable, IMessageCTA } from '@novu/shared';

export class MessageTemplate {
  @IsOptional()
  @IsEnum(StepTypeEnum)
  type: StepTypeEnum;

  @IsOptional()
  variables?: ITemplateVariable[];

  @IsDefined()
  content: string | IEmailBlock[];

  @IsOptional()
  contentType?: 'editor' | 'customHtml';

  @IsOptional()
  @ValidateNested()
  cta?: IMessageCTA;

  @IsOptional()
  @IsString()
  feedId?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsString()
  title?: string;
}
