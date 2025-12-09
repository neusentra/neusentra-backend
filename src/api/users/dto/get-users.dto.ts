import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import {
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';

export class GetUsersQueryParamsDto {
  @ApiPropertyOptional({
    description: 'Cursor: ID of the last user from previous page',
    example: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
  })
  @IsUUID()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional({
    description:
      'Cursor: createdAt timestamp of the last user from previous page (ISO8601 format)',
    example: '2025-10-05T14:00:00Z',
  })
  @IsOptional()
  @IsISO8601()
  createdAt?: string;

  @ApiProperty({ description: 'Limit' })
  @IsNumberString()
  @IsNotEmpty()
  limit: string;
}

export class UsersListDto {
  @ApiProperty({
    description: 'User ID',
    example: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
  })
  @Expose({ name: 'id' })
  id: string;

  @ApiProperty({ description: 'Full name of the user', example: 'Tony Stark' })
  @Expose({ name: 'name' })
  name: string;

  @ApiProperty({
    description: 'Role assigned to the user',
    example: 'superadmin',
  })
  @Expose({ name: 'role' })
  role: string;

  @ApiProperty({ description: 'Whether the user is active', example: true })
  @Expose({ name: 'is_active' })
  isActive: boolean;

  @ApiProperty({
    description: 'Timestamp when the user was created',
    example: '2025-10-05T14:00:00Z',
  })
  @Expose({ name: 'created_at' })
  createdAt: string;

  @ApiProperty({
    description: 'Timestamp when the user was last updated',
    example: '2025-10-06T12:00:00Z',
  })
  @Expose({ name: 'updated_at' })
  updatedAt: string;
}

export class CursorDto {
  @ApiProperty({
    description:
      'Cursor position: created_at of the last user in the current page',
    example: '2025-10-05T14:00:00Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Cursor position: ID of the last user in the current page',
    example: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
  })
  id: string;
}

export class UsersListResponseDto {
  @ApiProperty({
    type: () => [UsersListDto],
    description: 'List of users returned for this page',
    example: [
      {
        id: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
        name: 'Tony Stark',
        role: 'superadmin',
        isActive: true,
        createdAt: '2025-10-05T14:00:00Z',
        updatedAt: '2025-10-06T12:00:00Z',
      },
    ],
  })
  users: Array<UsersListDto>;

  @ApiProperty({
    type: CursorDto,
    description: 'Cursor to fetch the next page of users',
    example: {
      createdAt: '2025-10-05T14:00:00Z',
      id: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
    },
  })
  nextCursor: CursorDto | null;
}

export class GetUsersResponseDto extends SuccessResponseDto {
  @ApiProperty({
    type: UsersListResponseDto,
    example: {
      users: [
        {
          id: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
          name: 'Tony Stark',
          role: 'superadmin',
          isActive: true,
          createdAt: '2025-10-05T14:00:00Z',
          updatedAt: '2025-10-06T12:00:00Z',
        },
      ],
      nextCursor: {
        createdAt: '2025-10-05T14:00:00Z',
        id: 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
      },
    },
  })
  declare data: UsersListResponseDto;
}
