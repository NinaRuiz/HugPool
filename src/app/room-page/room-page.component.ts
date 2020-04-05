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
  constructor(private roomHttpService: RoomHttpService) { }
  ngOnInit(): void {
    this.load();
  }
  public load() {
    this.roomHttpService.get('hola').subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

}
