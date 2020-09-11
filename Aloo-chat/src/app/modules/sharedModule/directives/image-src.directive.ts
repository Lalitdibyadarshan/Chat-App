import { Directive, Input, ElementRef, OnInit, HostListener } from '@angular/core';
import { ImagePathEnum } from '../enums/image-path.enum';

@Directive({
	// tslint:disable-next-line: directive-selector
	selector: '[src]'
  })
  export class ImageSrcDirective implements OnInit {
	@Input() doodle = false;
	@Input() fallbackImageURL: string;
	@Input() override = false;

	constructor(private el: ElementRef) {
	}

	ngOnInit(): void {
		this.buildImagePath();
	}

	buildImagePath(): void {
		if (this.el.nativeElement.tagName !== 'IMG' || this.override) {
			return;
		}

		setTimeout(() => {
			const path = this.el.nativeElement.src.split(window.location.origin).pop();
			const prefix = this.doodle ? ImagePathEnum.ILLUSTRATIONS : ImagePathEnum.IMAGES;
			this.el.nativeElement.src = prefix + path;
		});
	}

	@HostListener('error', ['$event'])
	updateSourceUrl(): void {
		this.el.nativeElement.src = this.fallbackImageURL;
	}
  }
