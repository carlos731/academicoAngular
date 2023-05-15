import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { ArquivoTesteService } from 'src/app/services/arquivo-teste.service';
import { Arquivo } from 'src/app/models/arquivo';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  FILES: Set<File>;
  files: File[] = [];
  urls = [];
  arquivos = [];

  constructor(
    private arquivoTesteService: ArquivoTesteService, 
    private toast: ToastrService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  inputFileChange(event: any): void {
    for (var i = 0; i < event.target.files.length; i++) {
      this.files.push(event.target.files[i]);

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (event: any) => {
        this.urls.push(event.target.result);
      }
    }
    console.log(this.files);
  }

  deletePreviewIMG(file: File): void{
    const index = this.files.indexOf(file);
    if(index !== -1){
      this.files.splice(index, 1);
      this.urls.splice(index, 1);
    }
    console.log("Posição: " + index);
  }

  upload(): void{
    const formData = new FormData();
    for(var i = 0; i < this.files.length; i++){
      formData.append("files", this.files[i]);
    }
    this.arquivoTesteService.uploadMultipleFiles(formData).subscribe(resposta => {
      this.toast.success('Upload com sucesso!!', 'UPLOAD');
      this.router.navigate(['dashboard']);
    }, ex => {
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else{
        this.toast.error(ex.error.message);
      }
    });

    for(var i = 0; i < this.files.length; i++){
      this.files.splice(i, this.files.length);
      this.urls.splice(i, this.urls.length);
    }
    // console.log(this.files);
    // console.log(this.urls);
  }

  findAll(): void{
    this.arquivoTesteService.findAll().subscribe(resposta => {
      this.arquivos = resposta;
    }, err => {
      console.log('Erro ao listar os badges', err);
    });
  }

  delete(id: any): void{
    const n = 1;
    this.arquivoTesteService.delete(n).subscribe(resposta => {
      this.toast.success('Arquivo deletado com sucesso!', 'DELETE');
      this.router.navigate(['dashboard']);
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
