import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appSelectoption]',
})
export class SelectOptionDirective implements AfterViewInit {
  selected = false;
  element: ElementRef;
  @Output() clicked: EventEmitter<ElementRef> = new EventEmitter<ElementRef>();

  constructor(private elem: ElementRef) {}

  ngAfterViewInit() {
    this.element = this.elem;
  }

  @HostListener('click', ['$event']) onClick($event) {
    if (!this.selected) {
      this.selected = true;
      this.clicked.emit(this.element);
    }
  }
}
