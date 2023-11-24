import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from '../viewer/viewer.component';
import { FileInterface } from '../fileinterface';
import { ViewerserviceService } from '../viewerservice.service';

@Component({
  selector: 'app-viewer-body',
  standalone: true,
  imports: [CommonModule, ViewerComponent],
  template: `
    <div [ngClass]="{'hidden': openTab !== file.documentId, 'block': openTab === file.documentId }">
      <div class="w-full">
        <button class="border border-solid p-2 mx-2 bg-stone-300">Создать новую запись</button>
        <button class="border border-solid p-2 mx-2 bg-yellow-300">Редактировать</button>
        <button class="border border-solid p-2 mx-2 bg-green-300">Сохранить</button>
        <button class="border border-solid p-2 mx-2 bg-red-300">Удалить</button>
      </div>
      <ul *ngIf="file.isFolder">
        <li *ngFor="let f of file.files" class="flex">
          <img src="{{ f.isFolder ? '/assets/icons/f_closed.png' : '/assets/icons/f_doc.png'}}" alt="file img" class="w-7 h-7">
          <a (dblclick)="toggle(f)" class="cursor-pointer">
            {{ f.fileName }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './viewer-body.component.css'
})
export class ViewerBodyComponent {
  @Input() openTab!:number;
  @Input() file!: FileInterface;
  viewerService = inject(ViewerserviceService);

  pageNum: number;
  constructor() {
    this.pageNum = 0
  }

  toggle(num: FileInterface) {
    this.viewerService.sendMessage(num);
  }                         
}
