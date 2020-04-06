import { Component, OnInit } from '@angular/core';
import {RoomHttpService} from '../services/room-http.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {
  public kisses = 0;
  public hugs = 0;
  public id = '5555';
  constructor(private roomHttpService: RoomHttpService) { }
  ngOnInit(): void {
    this.load();
  }
  public load() {
    this.roomHttpService.get('hola').subscribe(
      (response: any) => {
        this.kisses = response.kisses;
        this.hugs = response.hugs;
        this.id = response.id;
      }
    );
  }

}
