import { Component, OnInit } from '@angular/core';
import { Items } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemsSelected!: Items;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void{
    this.itemService.itemSelected.subscribe((items: Items) =>{
      this.itemsSelected = items;
    });
  }

}
