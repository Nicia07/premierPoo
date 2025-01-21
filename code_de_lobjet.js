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

console.log(voiture);//affiche-moi tout ce qui ce trouve dans la variable voiture 
console.log(typeof voiture);//affiche-moi la nature (typeof) de ma variable.
voiture.demarrer(); //sa sert a m'afficher le message de la fonction(vvvrrruuumm!!)
console.log(voiture.forme);//affiche-moi dans la variable voiture la propriété forme 


// La valeur de la proriéter taille devient petite 
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
        console.log("grrhhhhh");
    }
    this.avancer = function(){
        console.log("j'ai enttendu avance");
    }
    this.reculer = function(){
        console.log("j'an enttendu recule");
    }
};


//Créer une voiture à partir du construteur d'objet Voiture
//grace au mot-clée "new"
let voiture1 = new Voiture("rouge","carré","grande");
//Accéder à la couleur de l'objet voiture1
console.log(voiture1.couleur);
//Fait appel a la methode demarrer() de l'objet voiture1
voiture1.demarrer();

let voiture2 = new Voiture("orange","carré","petite");
console.log(voiture2.forme);
voiture2.avancer();

let voiture3 = new Voiture("gris","carré","grande");
console.log(voiture3.taille);
voiture3.reculer();

//let voiture4 = new voiture("rouge","carré","grande");
//let voiture5 = new voiture("vert","circulaire","petite");


//Créer 5 voiture de différentes couleurs, tailles et formes.
//Propriéter de l'utilisateur :
function Utilisateur(n,p,d,v,a){
    this.nom = n;
    this.prenom = p;
    this.dateNaissance = d;
    this.villeDeResidence = v;
    this.age = a;


    //Méthode de l'utilisateur
    this.courrir = function(){
        console.log("plus vite");
    }
    this.marcher = function(){
        console.log("marche arriére");
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

};

let utilisateur = new Utilisateur("kilian","Mbappe","12/04/1999","congo","25");
console.log(utilisateur.prenom);

utilisateur.marcher();




