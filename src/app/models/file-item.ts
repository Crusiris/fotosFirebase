


export class FileItem {

    public file: File;
    public filename: string;
    public url: string;
    public goingUp: boolean;
    public progress: number;



 constructor( file: File){

    this.file = file;
    this.filename = file.name;


    this.goingUp = false;
    this.progress = 0;

 }
}