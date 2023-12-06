import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../Services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder,private _etudiantService:EtudiantService,private router:Router){}
  id: bigint = 0n;
  
  EtudiantFormBuilder = {};
  EtudiantFormB : FormGroup =new FormGroup({});
  nouvelEtudiant: string = '';
  
 
  get nomEt() {
    return this.EtudiantFormB.controls['nomEt'];
  }
  get ecole() {
    return this.EtudiantFormB.controls['ecole'];
  }

  get prenomEt() {
    return this.EtudiantFormB.controls['prenomEt'];
  }
  get dateNaissance() {
    return this.EtudiantFormB.controls['dateNaissance']
  }
  get studentEmail() {
    return this.EtudiantFormB.controls['studentEmail']
  }
  get cin() {
    return this.EtudiantFormB.controls['cin']
  }

 
  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>this.id = param['id'])
   
    
    this.id !== undefined && 
      this._etudiantService.fetchEtudiantById(this.id).subscribe({
        next: (data) => {
          this.EtudiantFormB.patchValue({
            nomEt: data.nomEt,
            prenomEt: data.prenomEt,
            dateNaissance: data.dateNaissance,
            studentEmail: data.studentEmail,
           ecole: data.ecole,
            
            cin:data.cin
          })
      }
    })
   this.EtudiantFormBuilder = this.fb.group({
    nomEt: [{ value: '', disabled: true }],
    prenomEt: ['', [Validators.required,Validators.minLength(3),]],
   
   });
    
    console.log(this.EtudiantFormBuilder);

    this.EtudiantFormB = this.fb.group({
      nomEt: ['', [Validators.required, Validators.minLength(3)]],
      prenomEt: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: [ '',[ Validators.required,Validators.pattern( '([a-zA-Z0-9._-]+@gmail.com|[a-zA-Z0-9._-]+@esprit.tn)' ),],],
        
      cin: [ , [Validators.required, Validators.pattern('[0-9]')], ],
      dateNaissance: ["", [Validators.required]],
      ecole: ["", [Validators.required]],
     
    });
  }
 
  ajouterEtudiant() {
    // Créez un objet représentant les données de l'étudiant
    const etudiant = { nom: this.nouvelEtudiant };

    // Utilisez le service pour ajouter l'étudiant
    this._etudiantService.addEtudiant(etudiant).subscribe(
      response => {
        this.router.navigate(['']);
        console.log('Étudiant ajouté avec succès', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'étudiant', error);
      }
    );
  }
 
  add() {
   
    if (this.id !== undefined) {
      this._etudiantService.updateEtudiant(this.EtudiantFormB.getRawValue(), this.id).subscribe({
        next: () => this.router.navigate(['']),
      });
    }
    else {
      
       
      this._etudiantService. addEtudiant(this.EtudiantFormB.getRawValue()).subscribe({
        next: () => this.router.navigate(['']),
        
      });
    }
  }
}

