import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Items } from 'src/app/item/item.model';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-manage-detail',
  templateUrl: './manage-detail.component.html',
  styleUrls: ['./manage-detail.component.css']
})
export class ManageDetailComponent implements OnInit {

  items1!: Items;
  id!: number;
  constructor(private itemService: ItemService, private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.items1 = this.itemService.getItemsById(this.id);
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.itemService.deleteItem(this.id);
    this.router.navigateByUrl('/manage/start');
    this.router.navigateByUrl('/item-list', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/manage/0']);
  });
  }

  

}
