export interface Reciever {
  recieve(message: any) : null;
  close(docId: number) : null;
  toggleTabs($tabNumber: number) : null;
}
