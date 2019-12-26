let moduleAddPlat = (function () {
    return {
        
         newPlat(name,preparation,ingredients, prixPreparation) {
            let elem = { name: name, preparation: preparation, ingr\u00E9dients: ingredients, prixPreparation: prixPreparation };
            plats.push(elem);
        },
        newIngredient(name, local, prix) {
            let idIng = ingredients.length.toString();
            let elem = { idIng: idIng, name: name, local: local, prix: prix};
            ingredients.push(elem);
        }
    }
})();
