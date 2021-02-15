import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-workflow-responce',
  templateUrl: './workflow-responce.component.html',
  styleUrls: ['./workflow-responce.component.css']
})
export class WorkflowResponceComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  pagePaginator :number = 1;
  zoom = 0
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  @ViewChild(PdfViewerComponent) 
  private pdfComponent: PdfViewerComponent;
 
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  paginatorNext(){  
    if(this.pagePaginator < 1 ){
      this.pagePaginator = 1
    }
     this.pagePaginator = this.pagePaginator +1 
     console.log(this.pagePaginator)
  }

  paginatorPervious(){ 
    console.log(this.pagePaginator)
    this.pagePaginator = this.pagePaginator  -1 
 }
search(stringToSearch: string) {
  this.pdfComponent.pdfFindController.executeCommand('find', {
    caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
  });
}

}
