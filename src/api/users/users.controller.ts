import { Controller, Get, HttpStatus, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { NeuSentraAuthGuard } from 'src/guards/auth.guard';
import {
  GetUsersQueryParamsDto,
  GetUsersResponseDto,
} from './dto/get-users.dto';
import { GetUserId } from 'src/decorators/get-token-data.decorator';
import { GetUserbyIdResponseDto } from './dto/get-user-by-id.dto';

@ApiTags('Users')
@Controller({ path: 'users', version: '1' })
// @UseGuards(NeuSentraAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @ApiOperation({ summary: 'Get list of users' })
  @ApiQuery({ type: GetUsersQueryParamsDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of users retrieved successfully',
    type: GetUsersResponseDto,
  })
  async getUsers(
    @Query('id') id: string,
    @Query('createdAt') createdAt: string,
    @Query('limit') limit: number,
  ): Promise<GetUsersResponseDto> {
    return this.usersService.getUserList(id, createdAt, +limit);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get Details of a user by ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User details fetched successfully',
    type: GetUserbyIdResponseDto,
  })
  async getUserById(
    @GetUserId() userId: string,
  ): Promise<GetUserbyIdResponseDto> {
    return this.usersService.getUserById(userId);
  }
}
