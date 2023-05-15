import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Badge } from 'src/app/models/badge';
import { BadgeNivel } from 'src/app/models/badgeNivel';

import { BadgeService } from 'src/app/services/badge.service';
import { BadgeNivelService } from 'src/app/services/badge-nivel.service';

/*Formulários*/
import { FormBadgeCreateComponent } from 'src/app/components/forms/form-badge-create/form-badge-create.component';
import { FormBadgeNivelComponent } from 'src/app/components/forms/form-badge-nivel/form-badge-nivel.component';

/*Modals*/
import { DeleteComponent } from 'src/app/components/modals/delete/delete.component';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {
  badge: Badge = {
    id: '',
    descricao: '',
    img: '',
    status: '',
    badgeNivelId: '',
  }

  badgeNivel: BadgeNivel = {
    id: '',
    descricao: '',
    badges: [],
  }
  
  BADGES: Badge[] = [];
  NIVEIS: BadgeNivel[] = [];

  constructor(private badgeService: BadgeService, private badgeNivelService: BadgeNivelService, private matDialog: MatDialog) { }

  openFormBadge(){
    this.matDialog.open(FormBadgeCreateComponent, {
      width: '350px',
    });
  }

  openFormBadgeNivel(){
    this.matDialog.open(FormBadgeNivelComponent, {
      width: '350px',
    });
  }

  openDelete(id?: any){
    console.log(id);
    this.matDialog.open(DeleteComponent, {
      width: '350px', 
      data: id,
    })
  }

  ngOnInit(): void {
    this.findAllBadges();
    this.findAllNivel();
  }

  findAllBadges() {
    this.badgeService.findAll().subscribe(resposta => {
      this.BADGES = resposta;
    }, err => {
      console.log('Erro ao listar os badges', err);
    });
  }

  findAllNivel(){
    this.badgeNivelService.findAll().subscribe(resposta => {
      this.NIVEIS = resposta;
    }, err => {
      console.log('Erro ao listar os Niveis de badges.', err);
    });
  }

}
