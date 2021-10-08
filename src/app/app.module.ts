import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { HeadComponent } from './head/head.component';
import { ItemSingleComponent } from './item/item-list/item-single/item-single.component';

import { ItemService } from './item/item.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemImagesComponent } from './item-detail/item-images/item-images.component';
import { ItemImagesSingleComponent } from './item-detail/item-images/item-images-single/item-images-single.component';
import { SlideComponent } from './item/slide/slide.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ManageComponent } from './manage/manage.component';
import { ManageListComponent } from './manage/manage-list/manage-list.component';
import { ManageItemComponent } from './manage/manage-list/manage-item/manage-item.component';
import { ManageEditComponent } from './manage/manage-edit/manage-edit.component';
import { ManageDetailComponent } from './manage/manage-detail/manage-detail.component';
import { ManageStartComponent } from './manage/manage-start/manage-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    ItemSingleComponent,
    ItemDetailComponent,
    HeadComponent,
    ItemImagesComponent,
    ItemImagesSingleComponent,
    SlideComponent,
    FooterComponent,
    CartComponent,
    ManageComponent,
    ManageListComponent,
    ManageItemComponent,
    ManageEditComponent,
    ManageDetailComponent,
    ManageStartComponent,
    DropdownDirective,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule { }

