import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(15);
    this.setBorder("#f5f5f5");
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder("violet");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder("#f5f5f5");
  }


  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}rem`;
  }
  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 0.25rem ${color}`;
  }
}
