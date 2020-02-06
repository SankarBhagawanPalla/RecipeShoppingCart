import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {


  @Output('navigate') navigation = new EventEmitter<string>();

  onRecipes() {
     this.navigation.emit('recipe');
  }

  onShopping() {
    this.navigation.emit( 'shopping');
  }

}
