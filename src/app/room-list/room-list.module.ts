import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomListRoutingModule } from './room-list-routing.module';
import { RoomListComponent } from './room-list.component';

@NgModule({
  declarations: [RoomListComponent],
  imports: [
    CommonModule,
    RoomListRoutingModule
  ]
})
export class RoomListModule { }
