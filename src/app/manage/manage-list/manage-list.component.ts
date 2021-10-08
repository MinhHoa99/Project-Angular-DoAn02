import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/item/item.model';
import { ItemService } from 'src/app/item/item.service';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css']
})
export class ManageListComponent implements OnInit {

  items1!: Items[];

  constructor(private itemService: ItemService, private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.items1 = this.itemService.onGetItems();
  }

  onNewItem() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
