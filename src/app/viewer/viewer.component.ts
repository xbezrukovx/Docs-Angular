import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageViewerData } from '../pageviewerdata';
import { Reciever } from '../reciever'
import { ViewerserviceService } from '../viewerservice.service';
import { ViewerHeaderComponent } from '../viewer-header/viewer-header.component';
import { ViewerBodyComponent } from '../viewer-body/viewer-body.component';
import { FileInterface } from '../fileinterface';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [CommonModule, ViewerHeaderComponent, ViewerBodyComponent],
  template: `
  <div class="w-full h-full">
      <ul class="overflow-auto flex flex-row list-none h-50 inline-block snap-x max-w-full">
        <app-viewer-header
          *ngFor="let page of pages"
          [pageData]="page"
          [openTab]="openTab"
        >
        </app-viewer-header>
      </ul>
    <div class="px-4 py-5 flex-auto">
      <div class="tab-content tab-space">
        <app-viewer-body
        *ngFor="let page of pages"
        [file]="page"
        [openTab]="openTab"
        >
        </app-viewer-body>
      </div>
    </div>
  </div>
  `,
  styleUrl: './viewer.component.css'
})
export class ViewerComponent implements Reciever{
  pages: FileInterface[] = [];
  openTab = 0;
  viewerService = inject(ViewerserviceService);

  ngOnInit(){
    // Подписываемся на сервер, для получения ивентов.
    this.viewerService.subscribe(this);
  }
  
  //Получаем ивенты с сервиса.
  recieve(message: FileInterface) {
    this.createTab(message);
    return null;
  }

  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
    return null;
  }

  createTab(newPage: FileInterface) {
    let pgs = this.pages.filter((p) =>
      p.documentId === newPage.documentId
    );

    if (pgs.length === 0) {
      this.pages.push(newPage);
    }
    this.openTab = newPage.documentId
  }

  close(docId: number) {
    this.pages = this.pages.filter(p => p.documentId !== docId);
    return null;
  }
}
