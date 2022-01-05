import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
//To handle async request and responses 
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //readonly APIUrl="http://localhost:5001/api/Post";
readonly APIUrl="https://localhost:5001/api/Post";
readonly APIResume="https://localhost:5001/api/Resume";
  constructor(private http:HttpClient) { }

  insertcompany(val:any){
    //debugger; 
    
    console.log(val);
    //return this.http.post(this.APIUrl+'Post/AddCompany',objData);
    return this.http.post(this.APIUrl+'/AddCompany', val);
    
  }
  updatepassword(val:any){
    console.log(val);
    return this.http.post(this.APIUrl+'/UpdateCompany', val);
    
  }
  updateprofile(val:any){
    console.log(val);
    return this.http.post(this.APIUrl+'/UpdateProfile', val);
  }
  UpdateCompanyDetails(val:any){
    console.log("UpdateCompanyDetails"+val);
    return this.http.post(this.APIUrl+'/UpdateCompanyDetails', val);
  }
  displaycompany():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/GetCompanies');
  }
  displaycompanycount():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/GetCompaniesCount');
  }
  displayresumecount():Observable<any[]>
  {
    return this.http.get<any>(this.APIResume+'/GetResumeCount');
  }
  displayapprovecount():Observable<any[]>
  {
    return this.http.get<any>(this.APIResume+'/GetApproveCount');
  }
  displaypendingcount():Observable<any[]>
  {
    return this.http.get<any>(this.APIResume+'/GetPendingCount');
  }
  displayapproveresume():Observable<any[]>
  {
    return this.http.get<any>(this.APIResume+'/GetApproveResume');
  }
  displayrejectresume():Observable<any[]>
  {
    return this.http.get<any>(this.APIResume+'/GetRejectedResume');
  }
  displayresumereport():Observable<any[]>
  {
    return this.http.get<any>(this.APIResume+'/GetResumeReport');
  }
  updateapprove(val:any){

    console.log("Service:-"+val);
    return this.http.post(this.APIResume+'/UpdateApprove',val);
  }
  displaycompanybyid(val:any)
  {
    return this.http.post<any>(this.APIUrl+'/GetCompanyById',val);
  }
  getallresume():Observable<any[]>
  {
    return this.http.get<any>(this.APIResume+'/GetAllResume');
  }
  getpdf(val:any):Observable<any[]>
  {
    var objdata={
      id:val
    }
    return this.http.post(this.APIResume+'/getpdf',objdata,{responseType: "blob"})
    .pipe(
      map((response) => response),
      catchError(null)
    )
    
    
  }
  getadmindata(val)
  {
    console.log("Admin Session:="+val);
    return this.http.get<any>(this.APIUrl+'/GetAdminData',val);
  }
  displayapprovecompany():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/GetApproveCompany');
  }
  displayrejectcompany():Observable<any[]>
  {
    return this.http.get<any>(this.APIUrl+'/GetRejectedCompany');
  }
  updateapprovecompany(val:any){

    console.log("Service:-"+val);
    return this.http.post(this.APIUrl+'/UpdateApproveCompany',val);
  }
  updaterejectcompany(val:any){

    console.log("Service:-"+val);
    return this.http.post(this.APIUrl+'/UpdateRejectCompany',val);
  }
  companybyid(val:any)
  {
    var objData : any = {
      Id : val
    }
    return this.http.post(this.APIUrl+'/CompanyById',objData);
    // .pipe(
    //   map((response : any) => Response)
    // );
  }
  resumebyid(val:any)
  {
    var objData : any = {
      resumeid : val
    }
    return this.http.post(this.APIResume+'/ResumeById',objData);
    // .pipe(
    //   map((response : any) => Response)
    // );
  }
}
