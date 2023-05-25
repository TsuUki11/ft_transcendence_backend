import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private profileService;
    constructor(profileService: ProfilesService);
    createProfileForUser(id: any): void;
}
