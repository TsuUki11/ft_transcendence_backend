import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { PrismaService } from '../prisma/prisma.servise';
__dirname
// const DEFAULT_PROFILE_PICTURE_PATH = "/../../resources/default_pp.png";
const DEFAULT_PROFILE_PICTURE_PATH = "/../../resources/default_pp.png";

@Injectable()
export class ProfilesService {
    constructor (private prisma: PrismaService) {}

	async getDefaultProfilePicture(): Promise<string> {
		return new Promise<string>((resolve, reject) => {
		  fs.readFile(__dirname + DEFAULT_PROFILE_PICTURE_PATH, 'utf8', (error, data) => {
			if (error) {
			  reject(error);
			} else {
			  resolve(data);
			}
		  });
		});
	  }
    // async getDefaultProfilePicture(): Promise<string> {
	// 	// return fs.readFile(DEFAULT_PROFILE_PICTURE_PATH, "utf8", (error, content) => {})
	// 	// return fs.readFile('image.jpg', function(err, data) {
	// 	// 	if (err) throw err // Fail if the file can't be read.
	// 	// })
	// 	let test: string;
	// 	await fs.readFile(__dirname + DEFAULT_PROFILE_PICTURE_PATH, 'utf8', (error, data) => {
	// 		  if (error) {
	// 			console.log(error);
	// 		}
	// 		else {
	// 			console.log("DONE");
	// 			test = data;
	// 		  }
	// 		});
	// 	return test;
	// }

	async createProfileForUser(id: number) {
		// const defaultPP = await this.getDefaultProfilePicture()
		const defaultPP = fs.readFileSync(__dirname + DEFAULT_PROFILE_PICTURE_PATH, { encoding: 'base64' });
		// const defaultPP = "test"
		const user = await this.prisma.user.update( {
			where: {id},
			data: {profile: {create: {profile_picture: defaultPP}}}
		} )
	}
}
