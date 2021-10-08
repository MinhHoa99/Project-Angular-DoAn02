import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';
import { Items } from 'src/app/item/item.model';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.css']
})
export class ManageEditComponent implements OnInit {

  id!: number;
  editMode = false;
  itemForm!: FormGroup;

  constructor(private route: ActivatedRoute, private itemService: ItemService, private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();

      }
    );
  }
  private initForm() {
    let name= '';
    let category = '';
    let color ='';
    let screen='';
    let chip = '';
    let memory ='';
    let ram ='';
    let description = '';
    let imagePath = '';
    let reviewCounter: number | undefined = undefined;
    let reviews: string[] = [];
    let price : number | undefined = undefined;
    let ratingCounter : number | undefined = undefined;
    let ratings : number[] | undefined = undefined;
    let avg : number | undefined = undefined;
    let extraImages: string[] = [];


    if (this.editMode) {
      const items = this.itemService.getItemsById(this.id);
      name = items.name;
      category = items.category;
      color = items.color;
      screen = items.screen;
      chip = items.chip;
      memory = items.memory;
      ram = items.ram;
      description = items.description;
      imagePath = items.imagePath;
      reviewCounter = items.reviewCounter;
      reviews = items.reviews;
      price = items.price;
      ratingCounter = items.ratingCounter;
      ratings = items.ratings;
      avg = items.avg;
      extraImages = items.extraImages;

    }

    this.itemForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'category': new FormControl(category, Validators.required),
      'color': new FormControl(color, Validators.required),
      'screen': new FormControl(screen, Validators.required),
      'chip': new FormControl(chip, Validators.required),
      'memory': new FormControl(memory, Validators.required),
      'ram': new FormControl(ram, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'reviewCounter': new FormControl(reviewCounter, Validators.required),
      'reviews': new FormControl(reviews, Validators.required),
      'price': new FormControl(price, Validators.required),
      'ratingCounter': new FormControl(ratingCounter, Validators.required),
      'ratings': new FormControl(ratings, Validators.required),
      'avg': new FormControl(avg, Validators.required),
      'extraImages': new FormControl(extraImages, Validators.required)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.itemService.update(this.id, this.itemForm.value);
      this.router.navigateByUrl('/item-list', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/manage/0']);
    }); 
    //this.router.navigate(['/manage/0'], { relativeTo: this.route });
    } else {
      this.itemService.add(this.itemForm.value);
      this.router.navigateByUrl('/item-list', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/manage/0']);
    });
    }
  }

  onCancel() {
    this.router.navigate(['/manage/0'], { relativeTo: this.route });
  }

}
