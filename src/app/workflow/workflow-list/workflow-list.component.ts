import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectorModel, DataSourceModel, Diagram, DiagramComponent, LayoutModel, NodeModel, SnapSettingsModel } from '@syncfusion/ej2-angular-diagrams';

import { DataManager, Query } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css']
})
export class WorkflowListComponent implements OnInit {
  @ViewChild("diagram")
    public diagram: DiagramComponent;
    public snapSettings: SnapSettingsModel;
    public items: DataManager;
    public layout: LayoutModel;
    public dataSourceSettings: DataSourceModel;
    //Initializes data source
    public data: object[] = [{
            Name: "Steve-Ceo"
        },
        {
            Name: "Kevin-Manager",
            ReportingPerson: "Steve-Ceo"
        },
        {
            Name: "Peter-Manager",
            ReportingPerson: "Kevin-Manager"
        },
        {
            Name: "John- Manager",
            ReportingPerson: "Peter-Manager"
        },
        {
            Name: "Mary-CSE ",
            ReportingPerson: "Peter-Manager"
        },
    ];
    //Sets the default properties for all the Nodes
    public getNodeDefaults(obj: NodeModel, diagram: Diagram): NodeModel {
        obj.shape = {
            type: 'Text',
            content: (obj.data as {
                Name: 'string'
            }).Name
        };
        obj.style = {
            fill: 'None',
            strokeColor: 'none',
            strokeWidth: 2,
            bold: true,
            color: 'white'
        };
        obj.width = 100;
        obj.height = 40;
        obj.borderColor = 'white';
        obj.backgroundColor = '#6BA5D7';
        obj.borderWidth = 1;
        return obj;
    }
    //Sets the default properties for all the connectors
    public getConnectorDefaults(connector: ConnectorModel, diagram: Diagram): ConnectorModel {
        connector.style = {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        connector.targetDecorator.style.fill  =  '#6BA5D7';
        connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
        connector.type = 'Orthogonal';
        return connector;
    }
    ngOnInit(): void {
        this.snapSettings = {
            constraints: 0
        }
        this.items = new DataManager(this.data as JSON[], new Query().take(7));
            //Uses layout to auto-arrange nodes on the Diagram page
        this.layout = {
            //Sets layout type
            type: 'HierarchicalTree',
            //set layout alignment
            //bounds: new Rect(0, 0, 500, 500),
            horizontalSpacing: 25,
            verticalSpacing: 30,
            horizontalAlignment: 'Left',
            verticalAlignment: 'Top'
        }
        //Configures data source for Diagram
        this.dataSourceSettings = {
            id: 'Name',
            parentId: 'ReportingPerson',
            dataSource: this.items
        }
    }
}
