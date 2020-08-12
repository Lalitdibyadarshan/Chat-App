import { DoodleEnum } from '../enums/doodle.enum';

export class DoodleModel {
	constructor(public doodleName: DoodleEnum, public description: string) {}
}
