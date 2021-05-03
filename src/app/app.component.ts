
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, BpmnDiagrams, NodeModel, BpmnShapeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: "app-root",
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [shape]='shape'></e-node>
          <e-node id='node2' [offsetX]=250 [offsetY]=150 [shape]='shape1'></e-node>
          <e-node id='node3' [offsetX]=350 [offsetY]=150 [shape]='shape2'></e-node>
          <e-node id='node4' [offsetX]=450 [offsetY]=150 [shape]='shape3'></e-node>
          <e-node id='node5' [offsetX]=550 [offsetY]=150 [shape]='shape4'></e-node>
          <e-node id='node6' [offsetX]=150 [offsetY]=300 [shape]='shape5'></e-node>
          <e-node id='node7' [offsetX]=250 [offsetY]=300 [shape]='shape6'></e-node>
        </e-nodes>
    </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram: DiagramComponent;
  public shape: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Event',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape1: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Gateway',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape2: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Activity',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape3: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Message',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape4: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'DataSource',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape5: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'DataObject',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public shape6: BpmnShapeModel = {
    type: 'Bpmn',
    shape: 'Group',
    // set the event type as End
    event: {
      event: 'End'
    }
  };
  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    return node;
  }
}
