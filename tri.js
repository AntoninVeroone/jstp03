let moduleTri = (function () {
    return {
        ingredientTri(listIngredient,croissance) {
            listIngredient.sort()
            if (croissance == "decroissant") newList.reverse();
            return  newList;
        },
        ingredientTriPrice(croissance) {
            let newList = ingredients;
            newList.sort((a, b) => parseInt(a.prix, 10) - parseInt(b.prix, 10));
            if (croissance == "decroissant") newList.reverse();
            return newList;
        },
        platsTriNamePlat(croissance) {
            let newList = plats;
            newList.sort((a, b) => a.name - b.name);
            if (croissance == "decroissant") newList.reverse();
            return newList;
        },
        platsTriPricePlat(croissance) {
            let newList = plats;
            newList.sort((a, b) => modulePlats.getPrice(a.name) - modulePlats.getPrice(b.name));
            if (croissance == "decroissant") newList.reverse();
            return newList;
        },
        platsTriTimerPlat(croissance) {
            let newList = plats;
            newList.sort((a, b) => modulePlats.getTimer(a.name) - modulePlats.getTimer(b.name));
            if (croissance == "decroissant") newList.reverse();
            return newList;
        }

    }
    }) ();
