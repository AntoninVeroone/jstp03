// JavaScript source code
let moduleTab = (function () {
    
    return {
        //fonction permettant de remplir le tableau avec les informations utiles
        createTab() {
            let tab = document.getElementById("mainTable");
            let i = 0;//pour afficher une ligne sur " d'une autres couleur permet aussi de créer des noms de classe différetn pour les menus déroulant
            for (elem of plats) {
                //créer un nouveau tableau a chaque ligne du tableau plats parcouru
                let newline = document.createElement("tr");
                //lui associe une class tr_0 ou tr_1 pour gérer la couleur en fond dans le css
                newline.setAttribute("class", "tr_" + i%2);
                tab.appendChild(newline);

                //nom de la recette
                let newInformation = document.createElement("th");
                newInformation.innerHTML = elem.name;
                newline.appendChild(newInformation);

                //temps de préparation
                let newInformation2 = document.createElement("th");
                newInformation2.innerHTML = modulePlats.getTimer(elem.name)+" min";
                newline.appendChild(newInformation2);

                //recette avec si les ingrédients sont locaux ou non dans un menu déroulant ouvrable en apuyant sur le nom du premier ingrédient de la recette
                let newlink = document.createElement('a');
                newlink.setAttribute('href', '#ing_' + i);
                newlink.setAttribute('data-toggle', 'collapse');
                newlink.setAttribute('aria-expanded', 'false');
                newlink.setAttribute('style', 'color:white');
                let listIng = modulePlats.getFirstIng(elem.name);
                let text = document.createTextNode(listIng);
                newlink.appendChild(text);

                let ingDiv1 = document.createElement('div');
                ingDiv1.setAttribute('class', 'collapse');
                ingDiv1.setAttribute('id', 'ing_' + i);

                let ingDiv2 = document.createElement('div');
                ingDiv2.setAttribute('style', 'color:LightGray');
                
                let newInformation3 = document.createElement("th");
                ingDiv2.innerHTML = modulePlats.getRecipyisLocal(elem.name);

                newline.appendChild(newInformation3);
                newInformation3.appendChild(newlink);
                newInformation3.appendChild(ingDiv1);
                ingDiv1.appendChild(ingDiv2);

                //prix de préparation
                let newInformation4 = document.createElement("th");
                newInformation4.innerHTML = elem.prixPreparation + " EUR" ;
                newline.appendChild(newInformation4);

                //prix total
                let newInformation5 = document.createElement("th");
                newInformation5.innerHTML = modulePlats.getPrice(elem.name) + " EUR" ;
                newline.appendChild(newInformation5);


                i++;
            }
        }
    }
})();
