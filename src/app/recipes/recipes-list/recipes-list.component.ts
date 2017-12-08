import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // Recipe[]: object array
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
    new Recipe('Pizza', 'This is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjfXTZRXdSvf5nycPPh4jQ89B4rxiyGY7TPjZPEfRJeaxfhXytg'),
    new Recipe('Paella', 'This is simply a test', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/20/0/CCTUL104_Ultimate-Paella_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384541152950.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
