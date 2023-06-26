import { Component } from '@angular/core';
import { Category } from 'src/app/model/Category/category.model';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {

 category:Category=new Category();
 id: any;
 categories: any;

 editquiz:Category=new Category();
 constructor(private categoryService: CategoryService) { }
 ngOnInit() {
   //this.reloadData();
 }
 reloadData() {
  this.categoryService.getCategory().subscribe(data => {
    if (data) {
      this.categories=data
      console.log(this.categories);
    }
  });
}


public editeCategory(category:Category){
  this.category={...category};
  this.id=category.id;
}


public addOrEditeEvent(category:Category){
  console.log("cattttttt",category);
  if(!this.id){
    this.categoryService.createCategory(category).subscribe({
      next: response => this.reloadData(),
      error: error => console.log(error),
      complete: () =>  this.category=new Category(),
    });
  }else{
    this.category.id=this.id;
    this.categoryService.updateCategory(this.categories).subscribe({
      next: response => this.reloadData(),
      error: error => console.log(error),
      complete: () => this.category=new Category(),
    });
    this.id=null;
  }


}









}
