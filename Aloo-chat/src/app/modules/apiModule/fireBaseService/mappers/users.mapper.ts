import { MapperInterface } from '../../interfaces/mapper.interface';
import { RawUsersInterface } from '../interfaces/raw-users.interfce';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsersMapper implements MapperInterface<RawUsersInterface[], User[]> {
	toModel(rawUsers: RawUsersInterface[]): User[] {
		const users = rawUsers.map(rawUser => {
			return new User(rawUser);
		});
		return users;
	}
}
