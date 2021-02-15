import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowGeneratorComponent } from './workflow-generator/workflow-generator.component';
/****************************************************************************** */
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';

import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { AccumulationAnnotationService, AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService, ChartAllModule } from '@syncfusion/ej2-angular-charts';

import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';


import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxModule, ColorPickerModule, UploaderModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { ButtonModule, CheckBoxModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { HttpClientModule } from '@angular/common/http';

import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SharedModule } from 'app/shared/shared.module';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';
import { AuthGuard } from 'app/service/AuthGuard';
/********************************************************************************* */
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkflowResponceComponent } from './workflow-responce/workflow-responce.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormField} from '@angular/material/form-field';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { PdfViewerModule } from 'ng2-pdf-viewer'
@NgModule({
  declarations: [
    WorkflowGeneratorComponent,
    WorkflowListComponent,
    WorkflowResponceComponent,
  ],
  imports: [
    PdfViewerModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    //MatFormField,
    MatStepperModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    TooltipModule, 
    PopoverModule,
    ButtonsModule,
    HttpClientModule,
    DiagramAllModule,
    ChartAllModule,
    GridAllModule,
    SymbolPaletteAllModule,
    OverviewAllModule,
    ButtonModule,
    ColorPickerModule,
    DateRangePickerModule,
    CheckBoxModule,
    AccumulationChartModule,
    ToolbarModule,
    DropDownButtonModule,
    UploaderModule,
    CircularGaugeModule,
    DropDownListAllModule,
    ListViewAllModule,
    DialogAllModule,
    TextBoxModule,
    RadioButtonModule,
    MultiSelectModule,
    NumericTextBoxModule,
    SharedModule,
    DiagramModule,
  ],
  providers: [AuthGuard]
})
export class WorkflowModule { }
