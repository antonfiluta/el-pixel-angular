import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class AppHighlight {
  @Input() color = 'red';

  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setTextColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setTextColor('black');
  }

  @HostBinding('style.color') get getStyleColor() {
    console.log(`This item is highlighted with ${this.color}`);
    return this.color;
  }

  private setTextColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
