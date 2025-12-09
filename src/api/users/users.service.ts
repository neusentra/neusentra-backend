import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CustomLogger } from 'src/logger/custom-logger.service';
import { GET_USERS_LIST_QUERY } from './queries/get-users.query';
import {
  CursorDto,
  GetUsersResponseDto,
  UsersListDto,
  UsersListResponseDto,
} from './dto/get-users.dto';
import {
  GetUserbyIdResponseDto,
  UserDetailsDto,
} from './dto/get-user-by-id.dto';
import { GET_USER_DETAILS_BY_ID_QUERY } from './queries/get-user-by-id.query';

@Injectable()
export class UsersService {
  constructor(
    private readonly db: DatabaseService<any>,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext(UsersService.name);
  }

  async getUserList(
    id: string = 'd36c79cb-7a24-4fcf-8816-c7f6094e7dc1',
    createdAt: string = '9999-12-31T23:59:59Z',
    limit: number,
  ): Promise<GetUsersResponseDto> {
    try {
      const users = await this.db.rawQuery(
        GET_USERS_LIST_QUERY,
        [createdAt, id, limit],
        UsersListResponseDto,
      );
      const nextCursor: CursorDto = {
        id: users[users.length - 1].id as string,
        createdAt: users[users.length - 1]?.createdAt as string,
      };

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        data: {
          users,
          nextCursor,
        },
      };
    } catch (error) {
      this.logger.error('Failed to get user list', error);
      throw error;
    }
  }

  async getUserById(id: string): Promise<GetUserbyIdResponseDto> {
    try {
      const user = await this.db.rawQuery(
        GET_USER_DETAILS_BY_ID_QUERY,
        [id],
        UserDetailsDto,
      );

      if (!user) {
        throw new NotFoundException('No user found for the given id');
      }

      return {
        success: true,
        statusCode: HttpStatus.OK,
        message: 'User data fetched successfully',
        data: {
          user: user[0],
        },
      };
    } catch (error) {
      this.logger.error(`Failed to get user details by id ${id}`, error);
      throw error;
    }
  }
}
