import { FormsModule } from '@angular/forms';

import { NgModule } from "@angular/core";
import { ClickOutsideDropDownDirective } from "./dropdown.directive";
import { FilterTextBoxPipe } from "./filter.textbox.pipe/FilterTextBoxPipe";
import { FilterTextBox } from "./filter-textbox.component";
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
    FormsModule,
        CommonModule
    ],
    declarations: [
        ClickOutsideDropDownDirective,
        FilterTextBoxPipe,
        FilterTextBox],
    exports: [
        FilterTextBoxPipe,
        FilterTextBox]
})
export class FilterTextBoxModule { }