import { Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor (private profileService: ProfilesService) {}

    @Patch("/:id")
    createProfileForUser(@Param("id", ParseIntPipe) id) {
        this.profileService.createProfileForUser(id);
    }
}
