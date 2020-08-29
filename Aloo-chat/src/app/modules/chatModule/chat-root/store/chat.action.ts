import { User } from 'src/app/modules/apiModule/fireBaseService/models/user.model';

export class SetCurrentUserAction {
	static readonly type = '[Chat] set current user';
	constructor(public user: User) {}
}
