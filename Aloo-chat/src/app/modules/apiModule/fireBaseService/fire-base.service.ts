import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { UsersMapper } from './mappers/users.mapper';
const dummyData = require('../../../../assets/data/dummy-chat-data.json');

@Injectable({
	providedIn: 'root'
})
export class FirebaseService {

	constructor(private userMapper: UsersMapper) {}

	getAllChat(): User[] {
		return this.userMapper.toModel(dummyData);
	}
}
