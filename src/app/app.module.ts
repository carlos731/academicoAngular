import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*IMPORTS MATERIAL*/
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

//Para trabalhar com forumlários angular 12
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';

/*Componentes*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';
import { BadgeComponent } from './pages/badge/badge.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CardBadgeComponent } from './components/cards/card-badge/card-badge.component';
import { FormBadgeCreateComponent } from './components/forms/form-badge-create/form-badge-create.component';
import { FormCursoCreateComponent } from './components/forms/form-curso-create/form-curso-create.component';
import { FormBadgeNivelComponent } from './components/forms/form-badge-nivel/form-badge-nivel.component';
import { DeleteComponent } from './components/modals/delete/delete.component';
import { FilesComponent } from './components/upload/files/files.component';
import { TabBadgeComponent } from './components/tabs/tab-badge/tab-badge.component';
import { ListComponent } from './components/tabs/list/list.component';
import { ArquivoComponent } from './pages/arquivo/arquivo.component';
import { CursosComponent } from './pages/aprendizado/cursos/cursos.component';
import { UcComponent } from './pages/aprendizado/uc/uc.component';
import { FormObjetoCreateComponent } from './components/forms/form-objeto-create/form-objeto-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    TemplateComponent,
    BadgeComponent,
    CardBadgeComponent,
    FormBadgeCreateComponent,
    FormCursoCreateComponent,
    FormBadgeNivelComponent,
    DeleteComponent,
    FilesComponent,
    TabBadgeComponent,
    ListComponent,
    ArquivoComponent,
    CursosComponent,
    UcComponent,
    FormObjetoCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Requisições http
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
