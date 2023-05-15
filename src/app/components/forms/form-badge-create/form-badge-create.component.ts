import { Component, OnInit } from '@angular/core';

import { Badge } from 'src/app/models/badge';
import { BadgeNivel } from 'src/app/models/badgeNivel';

import { BadgeService } from 'src/app/services/badge.service';
import { BadgeNivelService } from 'src/app/services/badge-nivel.service';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-badge-create',
  templateUrl: './form-badge-create.component.html',
  styleUrls: ['./form-badge-create.component.css']
})
export class FormBadgeCreateComponent implements OnInit {
  foto: File;
  public url: string;
    
  BadgeNivel: BadgeNivel[] = [];

  badge: Badge = {
    id: '',
    descricao: '',
    img: '',
    status: '',
    badgeNivelId: '',
  }

  badgeNivelId: FormControl = new FormControl(null, Validators.minLength(1));
  descricao: FormControl = new FormControl(null, Validators.required);

  constructor(
    private badgeService: BadgeService,
    private badgeNivelService: BadgeNivelService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  inputFileChange(e: any) {
    if (e.target.files && e.target.files[0]) {
      this.foto = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event: any) => {
        this.url=event.target.result;
      }
      
    }
  }

  upload(): void{
      const formData = new FormData();
      formData.append('descricao', this.badge.descricao);
      formData.append('img', this.foto);
      // formData.append('status', 'ATIVO');
      formData.append('badgeNivelId', this.badge.badgeNivelId);
      console.log(formData);

      this.badgeService.upload(formData).subscribe(resposta => {
        this.toast.success('Badge cadastrado com sucesso!!', 'Cadastro');
        this.router.navigate(['badges']);
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
    this.badgeNivelService.findAll().subscribe(resposta => {
      this.BadgeNivel = resposta;
    })
  }

  validaCampos(): boolean {
    return this.descricao.valid && this.badgeNivelId.valid;
  }

}
