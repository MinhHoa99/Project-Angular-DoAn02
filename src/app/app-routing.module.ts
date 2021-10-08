import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ManageComponent } from './manage/manage.component';
import { ManageItemComponent } from './manage/manage-list/manage-item/manage-item.component';
import { ManageListComponent } from './manage/manage-list/manage-list.component';
import { ManageEditComponent } from './manage/manage-edit/manage-edit.component';
import { ManageDetailComponent } from './manage/manage-detail/manage-detail.component';
import { ManageStartComponent } from './manage/manage-start/manage-start.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {path: '', component: ItemComponent},
  {path:'item-list', component: ManageItemComponent},
  {path: ':id', component: ItemDetailComponent},
  {path: 'manage', component: ManageComponent, children:[
    {path: '', component:ManageStartComponent},
    {path:'new', component: ManageEditComponent},
    {path:'list', component: ManageListComponent},
    
    {path: ':id', component: ManageDetailComponent},
    {path: ':id/edit', component: ManageEditComponent},
    
  ]},
  {path:'cart-item', component: CartComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
