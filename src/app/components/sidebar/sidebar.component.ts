import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  //Para controlar o aparecimento do texto
  @Output() setSideWidth = new EventEmitter<boolean>();
  @Input() getSideWidth: boolean = false;

  constructor(private router: Router, private authService: AuthService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['login']);
    this.authService.logout();
    this.toast.info('Conta encerrada', 'Logout', {timeOut: 7000});
  }

}
