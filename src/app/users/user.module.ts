import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UserListComponent],   
  imports: [
    NgxDatatableModule,
    CommonModule
  ]
})
export class UserModule { }
