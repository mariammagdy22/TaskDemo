import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public x = 'Recipes';
  public OnMenuItemClicked(itemName: string) {
    this.x = itemName;
  }
}
