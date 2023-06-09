import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';
import { ImageService } from 'src/app/services/image/image.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;
  @Input() index: any;

  constructor(public dialog: MatDialog, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  openDialog() {
    //this.disableScroll();

    const dialogRef = this.dialog.open(ModalUploadComponent, {
      width: '250px',
      height: '250px',
      disableClose: true,
      data: { name: "edit" }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  clearImg(index: number) {
    if (index !== -1) {
      //  this.selectedImages = this.selectedImages.filter((e: any) => e.id !== index);
      //  console.log(this.selectedImages, "this selected");
      //  console.log(this.subscription, "this sub");

      //  this.imageService.setDataArray(this.selectedImages)
      this.imageService.deleteImage(index)
    }
  }

}
