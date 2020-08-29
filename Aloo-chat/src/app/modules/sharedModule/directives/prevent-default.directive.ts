import { Directive, Input, ElementRef, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ImagePathEnum } from '../enums/image-path.enum';

@Directive({
	selector: '[appPreventDefault]'
  })
  export class PreventDefaultDirective {
	constructor(private elRef: ElementRef) {}

	@HostListener('click', ['$event'])
	onMouseClick(e) {
		e.preventDefault();
	}
  }
