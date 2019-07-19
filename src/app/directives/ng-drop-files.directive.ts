import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[]= [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter ( event:any ){
    this.mouseSobre.emit( true );
  }

  
  @HostListener('dragleave', ['$event'])
  public onDragLeave ( event:any ){
    this.mouseSobre.emit( false );
  }

  //Validaciones
   
private _subir( archivo:File ): boolean {

if (!this._archivoExiste(archivo.name) && this._esImagen( archivo.type ) ){
  return true;
}else {
  return false;
}

}

  private _prevenirDetener( event ){
    event.preventDefaul();
    event.stopPropagation();
  }
  

  private _archivoExiste ( nameFile: string ): boolean {

    for ( const archivo of this.archivos ){
      if ( archivo.filename ===  nameFile ){
        console.log('el archivo' + nameFile + 'ya existe');
        return true;
      }
    }

    return false;

  }

  private _esImagen( tipoArchivo:string ): boolean{
    return  ( tipoArchivo === '' || tipoArchivo === undefined ) ? false : tipoArchivo.startsWith('image');
  }
}
