import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.prod';
import { Etudiant } from '../Models/Etudiant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiUrl = environment.baseUrl+'etudiant';
 
  constructor(private _http: HttpClient) { };
  
  findAllEtudiants() {
    return this._http.get(this.apiUrl+'/retrieve-all-etudiants');
  }
 
  fetchEtudiantById(id: bigint) {
    return this._http.get<Etudiant>(this.apiUrl +'/retrieve-etudiant/{etudiant-id}'+ id);
  }
  updateEtudiant(etudiant: Etudiant, id: bigint) {
    return this._http.put(this.apiUrl+'/update-etudiant '+ id,etudiant);
  }
  addEtudiant(etudiant: any): Observable<any> {
    return this._http.post(this.apiUrl+'/add-etudiant', etudiant);
  }
  removeEtudiant(id: BigInt | undefined) {
    return this._http.delete(this.apiUrl + id);
  }
}
