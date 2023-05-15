import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
// import { Curso } from 'src/app/models/curso';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    cpf: '',
    senha: ''
  } 

  cpf = new FormControl(null, Validators.minLength(11))//Verifica se valor é formato de email
  senha = new FormControl(null, Validators.minLength(3));//No minimo 3 caracteres no input senha
  
  constructor(private toast: ToastrService, private service: AuthService, private router: Router) { }

  ngOnInit(): void {  }

  logar(){
    this.service.authenticate(this.creds).subscribe(resposta => {
      //this.toast.success(resposta.headers.get('Authorization').substring(7));
      this.service.successfullLogin(resposta.headers.get('Authorization').substring(7));
      this.router.navigate(['']);
    }, () =>{
      this.toast.error('Usuario e/ou senha inválidos');
    })
  }

  //Método valida campos do formulário
  validaCampos(): boolean{
    //return this.email.valid && this.senha.valid;
    if(this.cpf.valid && this.senha.valid){
      return true;
    } else{
      return false;
    }
  }

}
