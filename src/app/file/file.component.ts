import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInterface } from '../fileinterface';
import { Sender } from '../sender';
import { ViewerserviceService } from '../viewerservice.service';
import { PageViewerData } from '../pageviewerdata';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mx-5 my-1 w-full">
      <!-- <input
      [attr.class]="fileInterface.isFolder ? 'peer appearance-none h-0 hidden' : 'appearance-none h-0 hidden'"
      type="checkbox" id="{{ fileInterface.fileName }}"> -->
      <div class="flex">
        <div *ngIf="fileInterface.isFolder" class="text-gray-400 border border-solid rounded-sm px-1 mx-1 w-5 cursor-pointer select-none" (click)="open()">
          <p class="font-semibold">{{ isOpened ? "-" : "+"}}</p>
        </div>
        <label
          for="{{ fileInterface.fileName }}"
          class="flex items-center cursor-pointer">
          <img src="{{ fileInterface.isFolder ? fileImg : 'assets/icons/f_doc.png' }}" alt="file image" class="w-8 h-8">
          <p
          (click)="send(fileInterface.documentId)"
          >{{ fileInterface.fileName }}</p>
        </label>
      </div>
      <div class="overflow-hidden" [ngClass]="{ 'h-full' : isOpened, 'h-0' : !isOpened}">
        <app-file
          *ngFor="let fileInterface of fileInterface.files"
          [fileInterface]="fileInterface"
        ></app-file>
      </div>
    </section>
  `,
  styleUrl: './file.component.css'
})
export class FileComponent implements Sender {
  @Input() fileInterface!: FileInterface;
  viewerService = inject(ViewerserviceService);

  classFolder: string;
  fileImg: string;
  isOpened: boolean;
  constructor() {
    this.classFolder = "";
    this.fileImg = "assets/icons/f_closed.png";
    this.isOpened = false;
  }
  ngOnInit() {
    if(this.fileInterface.isFolder) {
      this.classFolder = "before:content-['+'] before:text-gray-400 " +
      "hover:before:text-gray-900 before:border before:border-solid " +
      "before:rounded-sm before:px-1 before:mx-1 peer-checked:before:transform " +
      "peer-checked:before:content-['-'] before:w-5";
    }
  }

  send(message: number) {
    this.viewerService.sendMessage(this.fileInterface);
  }

  open() {
    if(this.isOpened) {
      this.isOpened = false;
      this.fileImg = "assets/icons/f_closed.png";
    } else {
      this.isOpened = true;
      this.fileImg = "assets/icons/f_opened.png";
    }
  }
}
