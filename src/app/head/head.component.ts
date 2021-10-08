import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  providers: [NgbPopoverConfig]
})
export class HeadComponent implements OnInit {
  searchText!: string;
  closeResult!: string;
  
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private modalService: NgbModal, config: NgbPopoverConfig) {
    config.placement = 'bottom';
    config.triggers = 'hover';
  }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }


}
