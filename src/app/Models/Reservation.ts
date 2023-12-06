export class Status {
   
    type: string = "";
}
export class Chambre {
   
    idChambre?:bigint;
    
}

export class Reservation {
    id?: string;
    estValide?: boolean;
    anneeUniversitaire?: Date;
    dateCreation?: Date;
    status?: Status=new Status();
   chambre?: Chambre=new Chambre();
   
   
}