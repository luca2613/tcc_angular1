import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeAutorComponent } from './home-autor/home-autor.component';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaAutorComponent } from './pagina-autor/pagina-autor.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'painel', component: HomeAutorComponent},
  {path: 'livro', component: LivroDetalheComponent},
  {path: 'autor',component: PaginaAutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
