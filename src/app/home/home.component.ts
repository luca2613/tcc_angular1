import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public service:ApiserviceService,public router:Router) { }
  livros:any;
  

  ngOnInit(): void {
    this.service.getLivrosByLast().subscribe((res) => {
      this.livros = res.response;
    });
  }

}
