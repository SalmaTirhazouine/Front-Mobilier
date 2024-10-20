import { Component , OnInit} from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
@Component({
  selector: 'app-fautlist',
  templateUrl: './fautlist.component.html',
  styleUrls: ['./fautlist.component.css']
})
export class FautlistComponent implements OnInit  {
openModal(_t15: Produit) {
throw new Error('Method not implemented.');
}



produit!: Produit[];

selectedProduit: any; 
isViewOpen = false; 


constructor(private produitService:ProduitService,
  private router: Router, private location: Location) { }

ngOnInit(): void {
  /*this.getProduits();*/
  const categorieParDefaut = 'Fauteuils';

 
  this.getProduitsParCategorie(categorieParDefaut);
}
 /*
private getProduits() {
  this.produitService.getProduitsList().subscribe(data => {
    this.produit = data;
  });
}*/
private getProduitsParCategorie(categorie: string) {
  this.produitService.getProduitsParCategorie(categorie).subscribe(data => {
    this.produit = data;
  });
}

}


