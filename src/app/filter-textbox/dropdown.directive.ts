import { Directive, Output, EventEmitter, ElementRef, HostListener } from "@angular/core";


@Directive({
    selector:'[clickOutsideDropDown]'
})
export class ClickOutsideDropDownDirective {

    @Output() public clickOutsideDropDown = new EventEmitter();
    
    constructor(private _elementRef: ElementRef) { }

    @HostListener('document:click', ['$event.target'])
    public onCLick(targetElement) {
        if (targetElement.id === "search") { return; }
        const isClickedInside = this._elementRef.nativeElement.contains(targetElement)
        {
            if (!isClickedInside) {
                this.clickOutsideDropDown.emit(null);
            }
        }
    }
}

