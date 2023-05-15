import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { Badge } from 'src/app/models/badge';
import { BadgeNivel } from 'src/app/models/badgeNivel';

import { BadgeService } from 'src/app/services/badge.service';
import { BadgeNivelService } from 'src/app/services/badge-nivel.service';

/*Formulários*/
import { FormBadgeCreateComponent } from 'src/app/components/forms/form-badge-create/form-badge-create.component';
import { FormBadgeNivelComponent } from 'src/app/components/forms/form-badge-nivel/form-badge-nivel.component';
import { DeleteComponent } from '../../modals/delete/delete.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tabs: string [] = ['TODOS','POR NÍVEL','CONQUISTADOS'];
  activatedTabIndex: number = 0;

  BADGES: Badge[] = [];
  NIVEIS: BadgeNivel[] = [];

  constructor(private badgeService: BadgeService, private badgeNivelService: BadgeNivelService, private matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.findAllBadges();
    this.findAllNivel();
  }

  tabChange(tabIndex: number) {
    // debugger;
    this.activatedTabIndex = tabIndex;
  }

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
