import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Items } from '../../item.model';



@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit {
  searchText: string;
  @Input() items1!: Items;
  @Input() index!: number;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
