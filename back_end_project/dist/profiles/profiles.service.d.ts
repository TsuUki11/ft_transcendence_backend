import { PrismaService } from '../prisma/prisma.servise';
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    getDefaultProfilePicture(): Promise<string>;
    createProfileForUser(id: number): Promise<void>;
}
