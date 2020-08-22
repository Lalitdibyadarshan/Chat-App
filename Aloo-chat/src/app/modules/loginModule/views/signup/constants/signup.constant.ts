import { SignupStepEnum } from '../enums/step.enum';

export class SignupConstant {
	static readonly SIGNUP_STEPS = [
		SignupStepEnum.PERSONAL_DETAILS, SignupStepEnum.CONTACT, SignupStepEnum.PASSWORD, SignupStepEnum.DONE];
	static readonly NAME_MAXLENGTH = 40;
}
