import { Component, OnInit } from '@angular/core';

import { Badge } from 'src/app/models/badge';
import { BadgeNivel } from 'src/app/models/badgeNivel';

import { ObjetoAprendizagemService } from 'src/app/services/objeto-aprendizagem.service';
import { GrauDificuldadeService } from 'src/app/services/grau-dificuldade.service';

import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { GrauDificuldade } from 'src/app/models/grauDificuldade';
import { ObjetoAprendizagem } from 'src/app/models/objetoAprendizagem';

@Component({
  selector: 'app-form-objeto-create',
  templateUrl: './form-objeto-create.component.html',
  styleUrls: ['./form-objeto-create.component.css']
})
export class FormObjetoCreateComponent implements OnInit {
  file: File;
  public url: string;
    
  grauDificuldades: GrauDificuldade[] = [];

  objetoAprendizagem: ObjetoAprendizagem = {
    id: '',
    descricao: '',
    blob: '',
    status: '',
    grauDificuldadeId: '',
    usuarioId: '',
  }

  descricao: FormControl = new FormControl(null, Validators.required);
  grauDificuldadeId: FormControl = new FormControl(null, Validators.minLength(1));
  usuarioId: FormControl = new FormControl(null, Validators.minLength(1));

  constructor(
    private objetoAprendizagemService: ObjetoAprendizagemService,
    private grauDificuldadeService: GrauDificuldadeService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  inputFileChange(e: any) {
    if (e.target.files && e.target.files[0]) {
      this.file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event: any) => {
        this.url=event.target.result;
      }
      
    }
  }

  upload(): void{
      const formData = new FormData();
      formData.append('descricao', this.objetoAprendizagem.descricao);
      formData.append('file', this.file);
      // formData.append('status', 'ATIVO');
      formData.append('grauDificuldadeId', this.objetoAprendizagem.grauDificuldadeId);
      formData.append('usuarioId', '1');
      console.log(formData);

      this.objetoAprendizagemService.upload(formData).subscribe(resposta => {
        this.toast.success('Objeto cadastrado com sucesso!!', 'Cadastro');
        this.router.navigate(['uc']);
      }, ex => {
        if(ex.error.errors){
          ex.error.errors.forEach(element => {
            this.toast.error(element.message);
          });
        } else{
          this.toast.error(ex.error.message);
        }
      });
  }

  findAll(){
    this.grauDificuldadeService.findAll().subscribe(resposta => {
      this.grauDificuldades = resposta;
    })
  }

  validaCampos(): boolean {
    return this.descricao.valid && this.grauDificuldadeId.valid && this.usuarioId.valid;
  }

}
