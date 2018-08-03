import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Menu } from '../data/enums/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuItemClicked = new EventEmitter<Menu>();
  public isOpen = false;
  constructor() { }

  ngOnInit() {
  }
public OnMenuClicked() {
this.isOpen = !this.isOpen;
}
  public OnClicked(itemName: Menu) {
    this.menuItemClicked.emit(itemName);
  }
}
