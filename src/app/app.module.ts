import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeAutorComponent } from './home-autor/home-autor.component';
// import {TokeninterceptorInterceptor} from './users/tokeninterceptor.interceptor';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { PaginaAutorComponent } from './pagina-autor/pagina-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    HomeAutorComponent,
    HomeComponent,
    LivrosComponent,
    LivroDetalheComponent,
    PaginaAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:TokeninterceptorInterceptor,
    //   multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
