import { User } from '@prisma/client';

export type LogInDto = Omit<User, 'id' | 'username'>;
