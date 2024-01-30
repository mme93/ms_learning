import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface ScopeCheckBox{
  isSelected:boolean;
  value:string;
}

@Component({
  selector: 'app-scope-dialog',
  templateUrl: './scope-dialog.component.html',
  styleUrls: ['./scope-dialog.component.scss']
})
export class ScopeDialogComponent {

  scopeCheckbox:ScopeCheckBox[]=[];
  scopeValues:string[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    data.process.scopeList.forEach((scope: any) =>{
      this.scopeCheckbox.push({
        isSelected:false,
        value:scope.toString()
      })
    });
  }


  changeCheckbox(value:string, $event: any) {
    for (let i = 0; i < this.scopeCheckbox.length; i++) {
      if (this.scopeCheckbox[i].value === value) {
        if($event.checked){
          this.scopeValues.push(value);
        }else{
          this.scopeValues=this.scopeValues.filter(scope => scope !== value);
        }
      }
    }
  }
}
