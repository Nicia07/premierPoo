let voiture = {
    //Propriétés de la voiture 
    couleur : "jaune",
    forme : "arrondie",
    taille : "petite",

    //Méthode de la voiture 
    demarrer : function() {
        console.log("vvvrrruuuummm!!");
    }
};

console.log(voiture);
console.log(typeof voiture);
console.log(voiture.demarrer()); 
console.log(voiture.forme);


// La valeur de la proriéter taille devient petit 
voiture.taille = "petite";

//On ajoute la nouvelle propriété nombreRoue dont la valeur est 2
voiture.nombreRoue = 2 
 
//Voiture (c,f,t) fonction constructeur d'objet voiture 
function Voiture(c,f,t) {
    //propriété de chaque modèle d'objet voiture à construire 
    this.couleur = c ;
    this.forme = f ;
    this.taille = t ;

    //Méthode de chaque modéle d'objet voiture à construire 
    this.demarrer = function(){
        console.log("vvvrruuummmmm!!");
    }

}

//Créer une voiture à partir du construteur d'objet Voiture
//grace au mot-clée "new"
let voiture1 = new Voiture("rouge","carré","grande");

//Accéder à la couleur de l'objet voiture1
console.log(voiture1.couleur);

//Fait appel a la methode demarrer() de l'objet voiture1
voiture.demarrer();


//Créer 5 voiture de différentes couleurs, tailles et formes.
function Utilisateur(n,p,d,v,a){
    this.nom;
    this.prenom;
    this.dateNaissance;
    this.villeDeResidence;
    this.age;


    //Méthode de l'utilisateur
    this.courrir = function(){
        console.log("échape toi vite");
    }
    this.marcher = function(){
        console.log("marcher");
    }

    this.sauter = function(){
        console.log("sauter");
    }

    this.lire = function(){
        console.log("lire");
    }

    this.ecrire = function(){
        console.log("écrire");
    }

     
    this.reciter = function(){
        console.log("reciter");
    }



}