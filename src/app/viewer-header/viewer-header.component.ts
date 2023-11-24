import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageViewerData } from '../pageviewerdata';
import { ViewerserviceService } from '../viewerservice.service';
import { FileInterface } from '../fileinterface';

@Component({
  selector: 'app-viewer-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li (click)="toggleTabs(pageData.documentId)"
      class="flex-auto text-center snap-center cursor-pointer" [ngClass]="{'text-pink-600 bg-gray-500': openTab !== pageData.documentId, 'bg-white': openTab === pageData.documentId}">
      <a class="text-xs font-bold uppercase px-5 py-3 rounded block leading-normal">
        {{ pageData.fileName }}
        <i class="fas fa-space-shuttle text-base mr-1 cursor-pointer" (click)="close()">x</i>
      </a>
    </li>
  `,
  styleUrl: './viewer-header.component.css'
})
export class ViewerHeaderComponent {
  @Input() pageData!: FileInterface;
  @Input() openTab!: number;
  viewerService = inject(ViewerserviceService);

  close(){
    this.viewerService.close(this.pageData.documentId);
  }

  toggleTabs(docId: number){
    this.viewerService.toggle(docId);
  }
}
