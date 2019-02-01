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
    suggestion = suggestion.replace(/<[^>]*>/g, "");
    // suggestion = suggestion.split("<b>").join("");
    // suggestion = suggestion.split("</b>").join("");
    this.searchText = suggestion;
    this.showDropDown = false;
  }
  showDropDown: boolean = false;
  
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  
  @Input()
  searchSentences: any[];

  searchText: string;
}