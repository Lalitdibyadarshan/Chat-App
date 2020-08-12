import { DoodleEnum } from 'src/app/modules/sharedModule/enums/doodle.enum';
import { DoodleModel } from 'src/app/modules/sharedModule/models/doodle.model';
import { DictionaryEnum } from 'src/app/modules/sharedModule/enums/dictionary.enum';

export class LoginPageConstant {
	static readonly DOODLE = [
		new DoodleModel(DoodleEnum.CODER, DictionaryEnum.SIMPLE_UI),
		new DoodleModel(DoodleEnum.REAL_TIME_COLLAB, DictionaryEnum.COLLAB),
		new DoodleModel(DoodleEnum.TIME_MANAGEMENT, DictionaryEnum.TIME_MANAGEMENT),
	];

}
