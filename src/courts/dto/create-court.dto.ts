// export class CreateCourtDto {}
import { Court } from '@prisma/client';

export type CreateCourtDto = Omit<Court, 'id'>;
