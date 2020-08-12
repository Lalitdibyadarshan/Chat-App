import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { ImagePathEnum } from './image-path.enum';

@Directive({
	// tslint:disable-next-line: directive-selector
	selector: '[src]'
  })
  export class ImageSrcDirective implements OnInit {
	@Input() doodle = false;
	constructor(private el: ElementRef) {
	}

	ngOnInit(): void {
		this.buildImagePath();
	}

	buildImagePath() {
		if (this.el.nativeElement.tagName !== 'IMG') {
			return;
		}

		setTimeout(() => {
			const path = this.el.nativeElement.src.split(window.location.origin).pop();
			const prefix = this.doodle ? ImagePathEnum.ILLUSTRATIONS : ImagePathEnum.IMAGES;
			this.el.nativeElement.src = prefix + path;
		});
	}
  }
