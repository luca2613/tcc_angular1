import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiserviceService, private router: Router) { }
  errmsg:any;
  errmsgshow=false;
loginForm = new FormGroup({
  email:new FormControl('',Validators.required),
  senha:new FormControl('',Validators.required),

})
  ngOnInit(): void {
  }

  loginSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.service.login(this.loginForm.value).subscribe((res) => {
        if(res.status == true) {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('nome', res.result.nome);
          localStorage.setItem('id', res.result.id_autor);
          localStorage.setItem('email', res.result.email);
          this.router.navigate(['painel']);
          // window.location.reload();
        } else {
          this.errmsgshow = true;
          this.errmsg = res.mensagem;
        }
      })

    } else {
      this.errmsgshow = true;
      this.errmsg = 'Preencha todos os campos!';
    }
  }

}
