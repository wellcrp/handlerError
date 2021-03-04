import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(
    private service: HomeService
  ) { }

  ngOnInit(): void { }

  chamar() {
    this.service.getPost().subscribe(x => { return x });
  }
}
