import { compileInjectable } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { Badge } from 'src/app/models/badge';

import { BadgeService } from 'src/app/services/badge.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  idBadge: number;

  badge: Badge = {
    id: '',
    descricao: '',
    img: '',
    status: '',
    badgeNivelId: ''
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public id: number,
    private badgeService: BadgeService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.badge.id = this.id;
    this.findById();
  }

  findById(): void {
    this.badgeService.findById(this.id).subscribe(resposta => {
      this.badge = resposta;
    })
  }

  delete(): void{
    this.badgeService.delete(this.badge.id).subscribe(resposta => {
      this.toast.success('Badge deletado com sucesso!', 'DELETE');
      this.router.navigate(['badges']);
    }, ex => {
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    });

  }

}
