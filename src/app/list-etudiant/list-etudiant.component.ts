import { Component, OnDestroy, OnInit } from '@angular/core';
import { Etudiant } from '../Models/Etudiant';
import { Router } from '@angular/router';
import { EtudiantService } from '../Services/etudiant.service';
import { AuthService } from '../Services/Auth.service';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit ,OnDestroy{
  result = 0;
  listEtudiants: Etudiant[]=[];
 
  showForm = false;
  selectedEtudiant: Etudiant | null = null; 
  searchTerm = '';
  searchResults: Etudiant[] = [];
  EtudiantNew: Etudiant = { idEtudiant: BigInt(0) , nomEt: '', prenomEt: '' };
  
  
  constructor(private _router: Router, private _etudiantService: EtudiantService,private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
   
      console.log('I m mounted');
      
      this._etudiantService.findAllEtudiants().subscribe({
        next: (data) => (this.listEtudiants = data as Etudiant[]),
        error: (err) => console.log(err),
      });
    
    
  }
  ngOnDestroy(): void {
    console.log('I m unmounted');
  }
  UpdateEtudiant(student: any) {
    // Votre logique pour modifier un étudiant ici
 } 
 deleteEtudiant(id: BigInt | undefined) {
  this._etudiantService.removeEtudiant(id).subscribe({
    next : ()=>this.listEtudiants = this.listEtudiants.filter(etudiant=>etudiant.idEtudiant!== id)
  });
}
 searchByName() {
  if (this.searchTerm.trim() === '') {
    this.searchResults = [];
    return;
  }

  this.searchResults = this.listEtudiants!.filter(Etu =>
    Etu.nomEt?.toLowerCase().indexOf(this.searchTerm.toLowerCase())!==-1
  );
}

logout() {
  // Set the token to null, effectively logging the user out
  this.authService.setToken(null);

  // Redirect to the login page (or any other desired page)
  this.router.navigate(['/login']);
}
}