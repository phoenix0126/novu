import { Module } from '@nestjs/common';
import { USE_CASES } from './usecases';
import { ActivityController } from './activity.controller';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [SharedModule, AuthModule],
  providers: [...USE_CASES],
  controllers: [ActivityController],
})
export class ActivityModule {}
