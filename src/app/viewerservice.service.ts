import { Injectable } from '@angular/core';
import { PageViewerData } from './pageviewerdata';
import { Reciever } from './reciever';
import { FileInterface } from './fileinterface';

@Injectable({
  providedIn: 'root'
})
export class ViewerserviceService {
  private pages: PageViewerData[] = [];
  private observers : Reciever[] = [];

  subscribe(reciever: Reciever) {
    this.observers.push(reciever);
  }

  sendMessage(message: FileInterface) {
    this.observers.forEach(ob => {
      ob.recieve(message);
    })
  }

  close(docId: number){
    this.observers.forEach(ob => {
      ob.close(docId);
    })
  }

  toggle(docId: number) {
    this.observers.forEach(ob =>
      ob.toggleTabs(docId)
    );
  }

}
