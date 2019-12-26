let plats = [
    { name: 'Quesadillas', preparation: '30', ingrédients: ['17', '13', '20', '18'], prixPreparation: '3' },
    { name: 'Croque Monsieur Saumon Boursin', preparation: '15', ingrédients: ['19', '6', '16'], prixPreparation: '2' },
    { name: 'Pates Carbonara', preparation: '15', ingrédients: ['0', '3', '4', '5', '22'], prixPreparation: '6' },
    { name: 'Pates Bolognaises', preparation: '25', ingrédients: ['0', '1', '2', '22'], prixPreparation: '8' },
    { name: 'Salade composée', preparation: '5', ingrédients: ['12', '13', '14', '15'], prixPreparation: '1' },
    { name: 'Oeuf saumon en cocotte', preparation: '30', ingrédients: ['5', '6', '4', '7'], prixPreparation: '6' },
    { name: 'Pancakes', preparation: '14', ingrédients: ['21', '8', '20', '5'], prixPreparation: '5' },
    { name: 'Brownies', preparation: '45', ingrédients: ['5', '8', '9', '10', '11', '20'], prixPreparation: '8' },
];
/* pour le fichier plat il faut que je fasse:
 -temps de cuisson
 -prix de vente
 -local ou non
 -recette du plat
 */
let modulePlats = (function () {
    return {
        //getRecipy prend en parametre une chaine de caractere (nom du plats) et renvoie un message qui montre la recette du plat (renvoie une list de string)
        getRecipy(dish) {
            let list = [];
            let a = 0;
            for (let elem of plats) {
                if (elem.name == dish) {

                    elem.ingrédients.forEach(index => ingredients.forEach(ing => (ing.idIng == index) ? list.push(ing.name) : a++));
                }
            }
            return list;
        },
        getFirstIng(dish) {
            let first = "";
            let a = 0;
            for (let elem of plats) {
                if (elem.name == dish) {
                    ingredients.forEach(ing => (ing.idIng == elem.ingrédients[0]) ? first = ing.name : a++);
                }
            }
            return first;
        },
        //getTimer prend en parametre une chaine de caractere (nom du plats) et renvoie le temps de cuisson  (renvoie une string)
        getTimer(dish) {
            for (let elem of plats) {
                if (elem.name == dish) {
                    return(parseInt(elem.preparation,10));
                }
            }
        },
        //getTimer prend en parametre une chaine de caractere (nom du plats) et renvoie le prix de vente (renvoie un number)
        getPrice(dish) {
            let prix = 0;
            let prixPrep;
            for (let elem of plats) {
                if (elem.name == dish) {
                    prixPrep = parseFloat(elem.prixPreparation, 10);
                    elem.ingrédients.forEach(index => ingredients.forEach(ing => (ing.idIng == index) ? prix += parseFloat(ing.prix, 10) : prix += parseFloat(0, 10)));
                }
            }
            return(prix + prixPrep);
        },

        //utilise getRecipy mais ajoute si l'ingrédient est local ou non(revoie une list de string)
        getRecipyisLocal(dish) {
            let local = 0;
            let a = 0;
            let b = 0;
            let listIng = this.getRecipy(dish);
            let newList = [];
            listIng.forEach(function (index) {
                ingredients.forEach(ing => (ing.name == index) ? local = ing.local : a++);
                (local == 1) ? newList[b] = index + " (local)" : newList[b] = index + " (non local)";
                b++;
            })
            return newList;
        },
         //renvoie une liste de tout les ingredients de la liste d'ingrédients
        getAllIngredients() {
            let newList = [];
            listIng.forEach(elem => newList.push(elem.name));
            return newList;
        }
    }
})();
