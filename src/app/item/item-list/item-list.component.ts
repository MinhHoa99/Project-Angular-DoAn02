import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Items } from '../item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items!: Items[];
  searchText: string;
  config: { currentPage: number; itemsPerPage: number; totalItems: number; };

  constructor(private itemServ: ItemService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 12,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1);
  }
  pageChange(newPage: number) {
    this.router.navigate([''], { queryParams: { page: newPage } });
  }

  ngOnInit() {
    this.itemServ.onChangeItem.subscribe(
      (items: Items[]) => {
        this.items = items;
      }
    );
    this.items = this.itemServ.onGetItems();
  }

}
