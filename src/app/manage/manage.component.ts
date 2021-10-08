import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../item/item.model';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  itemsSelected!: Items;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemSelected.subscribe((item: Items) => { 
      this.itemsSelected = item;
    });
  }

}
