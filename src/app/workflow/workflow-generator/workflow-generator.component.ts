import { Component, OnInit, ViewChild } from '@angular/core';

import { AnnotationConstraints, Connector, ConnectorConstraints, ConnectorModel, Diagram, DiagramComponent, DiagramConstraints, FlowShapeModel, IBlazorClickEventArgs, IClickEventArgs, ICollectionChangeEventArgs, IConnectionChangeEventArgs, IDoubleClickEventArgs, IDragEnterEventArgs, IDropEventArgs, MarginModel, NodeModel, OrthogonalSegmentModel, PaletteModel, PointModel, PointPortModel, SnapSettingsModel, StrokeStyleModel, SymbolInfo, TextStyleModel } from '@syncfusion/ej2-angular-diagrams';
import { ComponentDto } from '../models/ComponentDto';
import { WorkflowService } from '../service/workflow.service';
import { ExpandMode } from '@syncfusion/ej2-navigations';
import { paletteIconClick } from '../script/diagram-common';
//import * as SampleJson from "../models/flowshapes.json";
//import * as ConnectorSymbole from "../models/connectorSymbols.json";
import { KeycloakService } from 'keycloak-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadService } from '../service/file-upload.service';
@Component({
  selector: 'app-workflow-generator',
  templateUrl: './workflow-generator.component.html',
  styleUrls: ['./workflow-generator.component.css']
})
export class WorkflowGeneratorComponent implements OnInit {

  @ViewChild('diagram')
  //Diagram Properties
  public diagram: DiagramComponent;
  public shape: ComponentDto[] = new Array;
  validatingForm: FormGroup;
  closeResult = '';
  componentName = "";
  shortLink: string = "";
  loading: boolean = false; // Flag variable 
  file: File = null; // Variable to store file 
  constructor(private workflowSevice: WorkflowService,
    private keycloakService: KeycloakService,
    private modalService: NgbModal,
    private fileUploadService: FileUploadService) { }

  /////Modal part

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //end modal 
  ngOnInit(): void {


  }

  public terminator: FlowShapeModel = { type: 'Flow', shape: 'Terminator' };
  public process: FlowShapeModel = { type: 'Flow', shape: 'Process' };
  public decision: FlowShapeModel = { type: 'Flow', shape: 'Decision' };
  public data: FlowShapeModel = { type: 'Flow', shape: 'Data' };
  public directdata: FlowShapeModel = { type: 'Flow', shape: 'DirectData' };
  public margin: MarginModel = { left: 25, right: 25 };
  public connAnnotStyle: TextStyleModel = { fill: 'white' };
  public strokeStyle: StrokeStyleModel = { strokeDashArray: '2,2' };
  public segments: OrthogonalSegmentModel = [{ type: 'Orthogonal', direction: 'Top', length: 120 }];
  public segments1: OrthogonalSegmentModel = [
    { type: 'Orthogonal', direction: 'Right', length: 100 }
  ];
  public interval: number[] = [
    1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25,
    9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75
  ];
  public snapSettings: SnapSettingsModel = {
    horizontalGridlines: { lineColor: '#e0e0e0', lineIntervals: this.interval },
    verticalGridlines: { lineColor: '#e0e0e0', lineIntervals: this.interval }
  };

  //SymbolPalette Properties
  public symbolMargin: MarginModel = { left: 15, right: 15, top: 15, bottom: 15 };
  public expandMode: ExpandMode = 'Multiple';
  //Initialize the flowshapes for the symbol palatte
  private flowshapes: NodeModel[] = [
    { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
    { id: 'Process', shape: { type: 'Flow', shape: 'Process' } },
    { id: 'Decision', shape: { type: 'Flow', shape: 'Decision' } },
  ];
  //Initializes connector symbols for the symbol palette
  private connectorSymbols: ConnectorModel[] = [
    {
      id: 'Link21',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'Arrow', style: { strokeColor: '#757575', fill: '#757575' } },
      style: { strokeWidth: 1, strokeColor: '#757575' }
    },
  ];
  public palettes: PaletteModel[] = [
    {
      id: 'flow',
      expanded: true,
      symbols: this.flowshapes,
      iconCss: 'shapes',
      title: 'Flow Shapes'
    },
    {
      id: 'connectors',
      expanded: true,
      symbols: this.connectorSymbols,
      iconCss: 'shapes',
      title: 'Connectors'
    }
  ];

  /**************** Ends variables */

  /*************************Begin specific methods */

  saveWorkflow() {
    this.shape.forEach(element => {
      element.idUser = 1
      element.idWorkflow = 1
      this.workflowSevice.createWorflow(element)
        .subscribe();
    });
  }

  //drop event
  public drop(args, content): void {
    this.open(content)
    this.componentName = args.element.properties.id
    // console.log("this is dra", args);
  }

  onClick(event, content) {
    if (event.element.id) {
      this.open(content);
      this.componentName = event.element.id;
      if (!event.MouseEvent)
        return
    }
    //console.log(event.element.id)
  }
/*******************************************Start upload file  */
onChange(event) { 
  this.file = event.target.files[0]; 
} 

// OnClick of button Upload 
onUpload() { 
  this.loading = !this.loading; 
  console.log(this.file); 
  this.fileUploadService.upload(this.file).subscribe( 
      (event: any) => { 
          if (typeof (event) === 'object') { 
              // Short link via api response 
              this.shortLink = event.link; 
              this.loading = false; // Flag variable  
          } 
      } 
  ); 
} 
//////////
  public connectionChange(args: IConnectionChangeEventArgs): void {
    if (args.state === 'Changed') {
      let connector = args.connector;
      if (connector.targetID != "" && connector.sourceID != "") {
        let shapeCompo: ComponentDto = new ComponentDto
        shapeCompo.name = connector.sourceID;
        shapeCompo.reportingDestination = connector.targetID
        this.shape.push(shapeCompo)
      }
    }
  }

  /*************************ends specific methods */

  public nodeDefaults(node: NodeModel): NodeModel {
    let obj: NodeModel = {};
    if (obj.width === undefined) {
      obj.width = 145;
    } else {
      let ratio: number = 100 / obj.width;
      obj.width = 100;
      obj.height *= ratio;
    }
    obj.style = { fill: '#357BD2', strokeColor: 'white' };
    obj.annotations = [{ style: { color: 'white', fill: 'transparent' } }];
    obj.ports = getPorts(node);
    return obj;
  }
  public connDefaults(obj: Connector): void {
    if (obj.id.indexOf('connector') !== -1) {
      obj.type = 'Orthogonal';
      obj.targetDecorator = { shape: 'Arrow', width: 10, height: 10 };
    }
  }
  public created(): void {
    this.diagram.fitToPage();
  }




  public dragEnter(args: IDragEnterEventArgs): void {
    let obj: NodeModel = args.element as NodeModel;
    if (obj && obj.width && obj.height) {
      let oWidth: number = obj.width;
      let oHeight: number = obj.height;
      let ratio: number = 100 / obj.width;
      obj.width = 100;
      obj.height *= ratio;
      obj.offsetX += (obj.width - oWidth) / 2;
      obj.offsetY += (obj.height - oHeight) / 2;
      obj.style = { fill: '#357BD2', strokeColor: 'white' };
    }
  }

  public getSymbolInfo(symbol: NodeModel): SymbolInfo {

    return { fit: true };
  }

  public getSymbolDefaults(symbol: NodeModel): void {

    symbol.style.strokeColor = '#757575';
    if (symbol.id === 'Terminator' || symbol.id === 'Process') {
      symbol.width = 80;
      symbol.height = 40;
    } else if (
      symbol.id === 'Decision' ||
      symbol.id === 'Document' ||
      symbol.id === 'PreDefinedProcess' ||
      symbol.id === 'PaperTap' ||
      symbol.id === 'DirectData' ||
      symbol.id === 'MultiDocument' ||
      symbol.id === 'Data'
    ) {
      symbol.width = 50;
      symbol.height = 40;
    } else {
      symbol.width = 50;
      symbol.height = 50;
    }
  }

  public diagramCreate(args: Object): void {
    paletteIconClick();
  }


  public collectionChange(args: ICollectionChangeEventArgs): void {
    if (args.state === 'Changed' && args.type === 'Addition') {
      let node = args.element;
      //Get node/connector details from here while adding the node/connectors...
    }
  }




}

function getPorts(obj: NodeModel): PointPortModel[] {
  let ports: PointPortModel[] = [
    { id: 'port1', shape: 'Circle', offset: { x: 0, y: 0.5 } },
    { id: 'port2', shape: 'Circle', offset: { x: 0.5, y: 1 } },
    { id: 'port3', shape: 'Circle', offset: { x: 1, y: 0.5 } },
    { id: 'port4', shape: 'Circle', offset: { x: 0.5, y: 0 } }
  ];
  return ports;
}


