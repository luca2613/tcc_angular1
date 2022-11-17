import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-autor',
  templateUrl: './home-autor.component.html',
  styleUrls: ['./home-autor.component.css']
})
export class HomeAutorComponent implements OnInit {

  constructor(private service:ApiserviceService,private route:Router, private router: ActivatedRoute) { }

  livros:any;

  token = this.service.getToken();

  ngOnInit(): void {
    

    if(!this.token) {
        this.logout();
    }

    this.service.getLivros().subscribe((res) => {
      this.livros = res.response;
    });
  }

  logout() {    
    localStorage.clear();
    this.route.navigate(['login']).then(()=>{
      window.location.reload();
    });
  }

}
