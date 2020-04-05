import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from '@angular/material/input';
import {HttpClient, HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'room/:id', component: RoomPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RoomPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes
    ), BrowserAnimationsModule, MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
