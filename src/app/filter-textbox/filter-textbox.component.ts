import { OnInit, Component, Input } from "@angular/core";

@Component({
  selector: 'filter-textbox',
  templateUrl: 'filter-textbox.component.html',
  styleUrls: ['filter-textbox.component.scss'],
  host: {
    '[class.app-navbar]': 'true',
    '[class.show-overlay]': 'showOverlay'
  }
})
export class FilterTextBox implements OnInit {
  ngOnInit(): void {

  }
  sugestionClick(suggestion) {
    this.searchText = suggestion;
    this.showDropDown = false;
  }
  showDropDown: boolean = false;
  toggleDropDown() {
    console.log('showDropDown value was ' + this.showDropDown);
    this.showDropDown = !this.showDropDown;
    console.log('showDropDown value became ' + this.showDropDown);

  }
  
  @Input()
  searchSentences: any[];

  searchText: string;
}