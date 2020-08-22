import { Component, Input, OnChanges, Output, EventEmitter, SimpleChange, OnInit } from '@angular/core';

@Component({
	selector: 'app-password-strength',
	templateUrl: './password-strength.component.html',
	styleUrls: [
		'./password-strength.component.scss'
	]
})
export class PasswordStrengthComponent implements OnChanges {
	lowerLetters: boolean;
	upperLetters: boolean;
	numbers: boolean;
	symbols: boolean;

	@Input() public passwordToCheck: string;
	@Output() passwordStrength = new EventEmitter<boolean>();

	bar0: string;
	bar1: string;
	bar2: string;
	bar3: string;

	msg = '';
	private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];

	private checkStrength(p) {
		let force = 0;
		const regex = /[$-/:-?{-~!"^_@`\[\]]/g;

		this.lowerLetters = /[a-z]+/.test(p);
		this.upperLetters = /[A-Z]+/.test(p);
		this.numbers = /[0-9]+/.test(p);
		this.symbols = regex.test(p);

		const flags = [this.lowerLetters, this.upperLetters, this.numbers, this.symbols];

		let passedMatches = 0;
		for (const flag of flags) {
			passedMatches += flag === true ? 1 : 0;
		}

		force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
		force += passedMatches * 10;

		// short password
		force = (p.length <= 6) ? Math.min(force, 10) : force;

		// poor variety of characters
		force = (passedMatches === 1) ? Math.min(force, 10) : force;
		force = (passedMatches === 2) ? Math.min(force, 20) : force;
		force = (passedMatches === 3) ? Math.min(force, 30) : force;
		force = (passedMatches === 4) ? Math.min(force, 40) : force;

		return force;
	}

	ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
		const password = changes.passwordToCheck.currentValue;
		this.setBarColors(4, '#DDD');
		const c = this.getColor(this.checkStrength(password));
		this.setBarColors(c.idx, c.col);

		const pwdStrength = this.checkStrength(password);
		pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);

		switch (c.idx) {
			case 1:
				this.msg = 'Poor';
				break;
			case 2:
				this.msg = 'Not Good';
				break;
			case 3:
				this.msg = 'Average';
				break;
			case 4:
				this.msg = 'Good';
				break;
		}
		if (!password) {
			this.msg = '';
		}
	}


	private getColor(s) {
		let idx = 0;
		if (s <= 10) {
			idx = 0;
		} else if (s <= 20) {
			idx = 1;
		} else if (s <= 30) {
			idx = 2;
		} else if (s <= 40) {
			idx = 3;
		} else {
			idx = 4;
		}
		return {
			idx: idx + 1,
			col: this.colors[idx]
		};
	}

	private setBarColors(count, col) {
		for (let n = 0; n < count; n++) {
			this['bar' + n] = col;
		}
	}



}
