import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }
  recipedetails: Recipe;

  ngOnInit() {
  }
  viewdetails(recipe: Recipe) {
    this.recipedetails = recipe;
  }

}
