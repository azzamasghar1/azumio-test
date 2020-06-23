import { SelectOptionDirective } from './select-option.directive';
import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';

@Directive({
  selector: '[appSelect]',
})
export class SelectDirective implements AfterContentInit {
  lastSelected: SelectOptionDirective;
  defaultIndex = 0;
  cleared = false;

  @Input() selectedIndex?: number;
  @ContentChildren(SelectOptionDirective, { descendants: false })
  children: QueryList<SelectOptionDirective>;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit() {
    const childrenArray = this.children.toArray();
    let gotoIndex = this.defaultIndex;
    if (this.selectedIndex) {
      gotoIndex = this.selectedIndex;
      this.renderer.addClass(
        childrenArray[gotoIndex].element.nativeElement,
        'active'
      );
      this.lastSelected = childrenArray[gotoIndex];
    }

    childrenArray.forEach((item) => {
      item.clicked.subscribe((itemElement: ElementRef) => {
        this.renderer.addClass(itemElement.nativeElement, 'active');
        if (this.lastSelected) {
          this.renderer.removeClass(
            this.lastSelected.element.nativeElement,
            'active'
          );
          this.lastSelected.selected = false;
        }
        this.lastSelected = item;
      });
    });
  }

  @HostListener('click', ['$event']) onClick($event) {
    $event.preventDefault();
  }
}
