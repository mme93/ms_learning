import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

export interface DatabaseProcess {
  id: number;
  processLabel: string;
  processIcon: string;
  processDescription: string;
  processActivated: boolean;
  processIsShowActivated: boolean;
  processStatusIcon: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseProcessService {

  private databaseProcessStartUrl = environment.uri + ':9000/api/process/newJob';

  constructor(private http: HttpClient) {
  }

  startProcess() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token') + '',
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    };
    // @ts-ignore
    return this.http.post(this.dashboardCreateTaskUrl, httpOptions);
  }

  getDataBaseProcess(processStatusIcon: string[]) {
    return [
      {
        id: 1,
        processLabel: 'BackUp Database-Data',
        processIcon: 'info',
        processDescription: 'Create a BackUp for this Database.',
        processActivated: false,
        processIsShowActivated: true,
        processStatusIcon: processStatusIcon[0]
      }, {
        id: 2,
        processLabel: 'Delete Database mamei_system',
        processIcon: 'info',
        processDescription: 'Delete Database with all tables and data.',
        processActivated: false,
        processIsShowActivated: true,
        processStatusIcon: processStatusIcon[0]
      }, {
        id: 3,
        processLabel: 'Create Database mamei_system',
        processIcon: 'info',
        processDescription: 'Restart all Micro-Services, to create Tables.',
        processActivated: false,
        processIsShowActivated: true,
        processStatusIcon: processStatusIcon[0]
      }, {
        id: 4,
        processLabel: 'Restart all needed Micro-Services and create Table',
        processIcon: 'info',
        processDescription: 'Restart all Micro-Services, to create Tables.',
        processActivated: false,
        processIsShowActivated: true,
        processStatusIcon: processStatusIcon[0]
      }, {
        id: 5,
        processLabel: 'Set Default Dataset',
        processIcon: 'info',
        processDescription: 'Create default data in different tables, which needed for the system.',
        processActivated: false,
        processIsShowActivated: true,
        processStatusIcon: processStatusIcon[0]
      }
    ];
  }

}
