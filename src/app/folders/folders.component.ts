import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from '../file/file.component';
import { FileInterface } from '../fileinterface';
import dataset from "./structure.json";
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [CommonModule, FileComponent],
  template: `
    <app-file class="h-full overflow-x"
      *ngFor="let folder of foldersList"
      [fileInterface]="folder"
    >
    </app-file>
  `,
  styleUrl: './folders.component.css'
})
export class FoldersComponent {
  foldersList: FileInterface[] = dataset;
  url = 'http://localhost:8080/api/doc/';

  ngOnInit() {
    this.foldersList.forEach(f =>
      this.checkFolders(f)
    );
  }

  async checkFolders(folder: FileInterface) {
    if (folder.documentId == -4){
      const data = await fetch(this.url, {method: 'GET'})
      console.log(data);
    }

    folder.files.forEach(f => {
      if(f.isFolder) {
        this.checkFolders(f);
      }
    })
  }
}
