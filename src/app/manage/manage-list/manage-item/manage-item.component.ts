import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/item/item.model';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {


  @Input() items1!: Items;
  @Input() index: number[] = [];

  constructor(private itemService: ItemService){}

  ngOnInit(): void {
  }

}
