export interface FileInterface {
  fileName: string;
  isFolder: boolean;
  files: FileInterface[];
  documentId: number;
}
