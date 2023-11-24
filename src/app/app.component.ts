import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FoldersComponent } from './folders/folders.component';
import { ViewerComponent } from './viewer/viewer.component';
import { PageViewerData } from './pageviewerdata';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FoldersComponent, ViewerComponent],
  template: `
    <div class="grid grid-cols-4 h-screen">
      <app-folders class="col-span-1 m-1 border-2 border-solid-gray mr-0"></app-folders>
      <app-viewer class="col-span-3 m-1 border-2 border-solid-gray"></app-viewer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'docs-app';
}
