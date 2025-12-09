import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';

export class UserDetailsDto {
  @ApiProperty({ description: 'ID of the user' })
  id: string;

  @ApiProperty({ description: 'Full name of the user' })
  name: string;

  @ApiProperty({ description: 'Username of the user' })
  username: string;

  @ApiProperty({ description: 'Whether the user is active' })
  isActive: boolean;

  @ApiProperty({
    description: 'Timestamp when the user was created',
    type: String,
  })
  createdAt: string;

  @ApiProperty({
    description: 'Timestamp when the user was last updated',
    type: String,
  })
  updatedAt: string;

  @ApiProperty({ description: 'User who created the user record' })
  createdBy?: string;

  @ApiProperty({ description: 'User who last updated the user record' })
  updatedBy?: string;
}

class UserDataDto {
  @ApiProperty()
  user: UserDetailsDto;
}

export class GetUserbyIdResponseDto extends SuccessResponseDto {
  @ApiProperty()
  declare data: UserDataDto;
}
