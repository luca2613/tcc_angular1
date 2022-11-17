import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {

  constructor(public service:ApiserviceService, private router: ActivatedRoute) { }

  id:string | null = null;
  categoria:string | null = null;
  livro:any;
  livroCategoria:any;

  ngOnInit(): void {
    this.router.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.categoria = params['categoria'];
    });
    

    this.service.getLivroById(this.id).subscribe((res) => {
      this.livro = res.response;
    });

    this.service.getLivroByCategoria(this.categoria).subscribe((res) => {
      this.livroCategoria = res.response.slice(0,5);
    });
  }

}
