import { Component, OnInit } from '@angular/core';
import { StandardButtonComponent } from '../../ui/standard-button/standard-button.component';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss']
})
export class TableStudentsComponent implements OnInit {
  public renamedStudent:String = null;
  RoleRight: any;

  constructor() { }

  ngOnInit(): void {
  }

  cellStyle(params,align:string="left"){

    if(params.api == null || params.api == undefined){
      return {'text-align':align}
    }
    var currentCell = params.api.getFocusedCell();
    if(currentCell){
      if(params.node.rowIndex == currentCell.rowIndex){
        return{ 'text-align':align,backgroundColor: "#ffd451"}
      }
      return { 'text-align':align,backgroundColor:"#fff"}
    }
    else
    return { 'text-align':align,backgroundColor:"#fff"}

  }

  private columnDefs(){
    return[

      {
        headerName:this.renamedStudent,
        field:'student_name',
        width:300,cellStyle:(params) =>this.cellStyle(params)
      },
      {
        headerName:"Route",
        field:'address',
        width:100,
        cellStyle:(params) => this.cellStyle(params)
      },
      {
        headerName:"Action",
        cellRendererFramework:StandardButtonComponent,
        width:82,
        cellStyle: { 'text-align':'center','isdelete':this.RoleRight.length > 0 && this.RoleRight[0].IsDelete == 1 ? '1':'0','isedit':this.RoleRight[0].IsEdit == 1 ? '1' : '0'},
        headerClass:"ag-grid-center"
      }


    ];
  }

}
