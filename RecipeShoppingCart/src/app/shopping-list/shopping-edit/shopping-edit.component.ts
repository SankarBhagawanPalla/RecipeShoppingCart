import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() add = new EventEmitter<Ingredient>();

  constructor() { }
  @ViewChild('name', {static: true}) name: ElementRef;
  @ViewChild('amount', {static: true}) amount: ElementRef;


  ngOnInit() {
  }
  addIngredient() {
    this.add.emit({name: this.name.nativeElement.value, amount: this.amount.nativeElement.value});
  }

}
