import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//To handle async request and responses 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpladresumeService {
  
  readonly APIResume="https://localhost:5001/api/Resume";
  constructor(private http:HttpClient) { }
 
  upload(objData):Observable<any[]>
  { 
    var date = objData.dateofbirth.toDateString()
    console.log(date)
    debugger;
    const formData:FormData=new FormData();
    formData.append('ResumeId',objData.resume_id);
    formData.append('CompanyUsername',objData.company_username);
    formData.append('candidatename',objData.candidatename);
    formData.append('gender',objData.gender);
    formData.append('skill',objData.skill);
    formData.append('phoneNumber',objData.phoneNumber);
    formData.append('email',objData.email);
    formData.append('state',objData.state);
    formData.append('city',objData.city);
    formData.append('dob',date);
    formData.append('highestqulification',objData.highestqualification);
    formData.append('previouscompany',objData.previouscompany);
    formData.append('upload',objData.upload[0].rawFile);
    formData.append('type',objData.type);
    return this.http.post<any>(this.APIResume+'/Resumeupload',formData);
    
  }
}
