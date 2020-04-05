import { Component, OnInit } from '@angular/core';
import {RoomHttpService} from '../services/room-http.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent implements OnInit {

  constructor(private roomHttpService: RoomHttpService) { }
  public load() {

  }
  ngOnInit(): void {
    this.load();
  }
}
