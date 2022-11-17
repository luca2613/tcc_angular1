import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public service:ApiserviceService,public router:Router){}
  token = this.service.getToken();
  nome =  this.service.getNome();
  categorias:any;
   
  ngOnInit(): void {
    this.service.getCategorias().subscribe((res) => {
      this.categorias = res.response;
    });
   }
   
   logout() {
     
     localStorage.clear();
     this.router.navigate(['login']).then(()=>{
       window.location.reload();
     });

   }
}
