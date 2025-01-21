// class. Créer la classe Document grace au mot-clé class
class Document{

    //Définissons le constructeur de la classe grace au mot-clé "constructor"
    constructor(titre, nombrePage, auteur){
        this.titre = titre;
        this.nombrePage = nombrePage;
        this.titre = auteur;

    }
    //Méthode desciption de la classe Document
    description(){
        console.log("le titre du document est ", this.titre);
        console.log("L'auteur est Abdoul", this.auteur);
        console.log("Le document contient", this.nombrePage);

    }
}
//Créer plusieurs documents similaires  partir du modél de Document
let documentHtml = new Document("Introduction au HTML", 35,"Hamidou Nicia");
let documentCss = new Document("Apprendre le CSS", 15, "Ali Fahar");
let documentJavaScript = new Document("Introduction au JavaScript", 55,"Nissay");
let documenMysql = new Document("Apprendre MySQL", 35, "Fatima Ali");

console.log(documentHtml.titre);
documentHtml.description();


