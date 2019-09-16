import { Component, OnInit } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { FileItem } from 'src/app/models/file-item';




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public imagePath;
  public message: string;
  imgURL: any = 'assets/img/preview.png';
  imgURLCompress: any = 'assets/img/preview.png';
  archivos: FileItem[] = [];

  constructor(private imageCompress: NgxImageCompressService) {}

  preview( files ) {
    if (files.length === 0) {
      return;
    }

    const MIMETYPE = files[0].type;
    if (MIMETYPE.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const READER = new FileReader();
    this.imagePath = files;
    READER.readAsDataURL(files[0]);
    // tslint:disable-next-line: variable-name
    READER.onload = (_event) => {
      this.imgURL = READER.result; // -> Change Default img to Input IMG
    };
  }

  // Compress Function
  compressFile() {

    // this.imageCompress.uploadFile().then(({image, orientation}) => {
      // this.imgURL = image;
      // tslint:disable-next-line: prefer-const
      let orientation: any ;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(this.imgURL));
      this.imageCompress.compressFile(this.imgURL, orientation, 50, 50).then(
        result => {
          this.imgURLCompress = result;
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        }
      );
    // });
  }

  clearInput() {
    this.imgURL = 'assets/img/preview.png';
    this.imgURLCompress = 'assets/img/preview.png';
    this.archivos = [];
  }

  ngOnInit() {
  }
}
