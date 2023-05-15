import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BadgeNivel } from 'src/app/models/badgeNivel';

import { BadgeNivelService } from 'src/app/services/badge-nivel.service';

@Component({
  selector: 'app-form-badge-nivel',
  templateUrl: './form-badge-nivel.component.html',
  styleUrls: ['./form-badge-nivel.component.css']
})
export class FormBadgeNivelComponent implements OnInit {

  badgeNivel: BadgeNivel = {
    id: '',
    descricao: '',
    badges: [],
  }

  descricao: FormControl = new FormControl(null, Validators.required);

  constructor(
    private badgeNivelService: BadgeNivelService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.badgeNivelService.create(this.badgeNivel).subscribe(resposta => {
      this.toast.success('Nível cadastrado com sucesso!', 'Create');
      this.router.navigate(['badges']);
    }), ex => {
      console.log(ex);
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    }
  }

  validaCampos(): boolean{
    return this.descricao.valid;
  }

}
