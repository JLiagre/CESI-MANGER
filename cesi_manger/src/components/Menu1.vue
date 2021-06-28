<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>{{restaurantName[0]}}</h3>
                <img class="plat-img" src="../assets/images/hotdog.jpg" alt="chez Jojo plat 1">
                <p>{{dishesNameJojo[0]}} : {{priceJojo[0]}}€</p>
                <img class="plat-img" src="../assets/images/hotdogvégé.jpg" alt="chez Jojo plat 2">
                <p>{{dishesNameJojo[1]}} : {{priceJojo[1]}}€</p>
                <img class="plat-img" src="../assets/images/hotdogiguess.jpg" alt="chez Jojo plat 3">
                <p>{{dishesNameJojo[2]}} : {{priceJojo[2]}}€</p>
            </div>
            <div class="col">
                <h3>{{restaurantName[1]}}</h3>
                <img class="plat-img" src="../assets/images/bolognaise.jpg" alt="Caci parfait plat 1">
                <p>{{dishesNameCaci[0]}} : {{priceCaci[0]}}€</p>
                <img class="plat-img" src="../assets/images/carbonara.jpg" alt="Caci parfait plat 2">
                <p>{{dishesNameCaci[1]}} : {{priceCaci[1]}}€</p>
                <img class="plat-img" src="../assets/images/cannelloni.jpg" alt="Caci parfait plat 3">
                <p>{{dishesNameCaci[2]}} : {{priceCaci[2]}}€</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>{{restaurantName[2]}}</h3>
                <img class="plat-img" src="../assets/images/craquottelégume.jpg" alt="c'est Sésé plat 1">
                <p>{{dishesNameSésé[0]}} : {{priceSésé[0]}}€</p>
                <img class="plat-img" src="../assets/images/craquotteclassique.jpg" alt="c'est Sésé plat 2">
                <p>{{dishesNameSésé[1]}} : {{priceSésé[1]}}€</p>
                <img class="plat-img" src="../assets/images/festinafricain.jpg" alt="c'est Sésé plat 3">
                <p>{{dishesNameSésé[2]}} : {{priceSésé[2]}}€</p>
            </div>
            <div class="col">
                <h3>{{restaurantName[3]}}</h3>
                <img class="plat-img" src="../assets/images/bibimbap.jpg" alt="bon Bardon plat 1">
                <p>{{dishesNameBardon[0]}} : {{priceBardon[0]}}€</p>
                <img class="plat-img" src="../assets/images/ddeokbokki.jpg" alt="bon Bardon plat 1">
                <p>{{dishesNameBardon[1]}} : {{priceBardon[1]}}€</p>
                <img class="plat-img" src="../assets/images/bbqcoréen.jpg" alt="bon Bardon plat 1">
                <p>{{dishesNameBardon[2]}} : {{priceBardon[2]}}€</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>{{restaurantName[4]}}</h3>
                <img class="plat-img" src="../assets/images/pizza.jpg" alt="CES'Eat plat 1">
                <p>{{dishesNameCES[0]}} : {{priceCES[0]}}€</p>
                <img class="plat-img" src="../assets/images/burger.jpg" alt="CES'Eat plat 2">
                <p>{{dishesNameCES[1]}} : {{priceCES[1]}}€</p>
                <img class="plat-img" src="../assets/images/spécialvincent.jpg" alt="CES'Eat plat 3">
                <p>{{dishesNameCES[2]}} : {{priceCES[2]}}€</p>
            </div>
            <div class="col">
                <h3>{{restaurantName[5]}}</h3>
                <img class="plat-img" src="../assets/images/salade1.jpg" alt="pif plat 1">
                <p>{{dishesNameBar[0]}} : {{priceBar[0]}}€</p>
                <img class="plat-img" src="../assets/images/salade2.jpg" alt="pif plat 2">
                <p>{{dishesNameBar[1]}} : {{priceBar[1]}}€</p>
                <img class="plat-img" src="../assets/images/salade3.jpg" alt="pif plat 3">
                <p>{{dishesNameBar[2]}} : {{priceBar[2]}}€</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu1',
    data() {
        return{
            // TODO(maybe): remove img and go with a for loop to reduce amount of code
            restaurantName: ["Chez Jojo","C'est Caci parfait","C'est Sésé qui régale","Au bon bardon","CES'EAT","Salade bar"],
            dishesNameJojo: ["Hot-Dog classique","Hot-Dog végétarien","Hot-Dog chinois"],
            dishesNameCaci: ["Pâtes bolognaise","Pâtes carbonara","Cannelloni"],
            dishesNameSésé: ["Craquottes aux légumes bio","Craquottes et verre d'eau","Le festin Africain"],
            dishesNameBardon: ["Bibimbap","Ddeokbokki","Barbecue coréen"],
            dishesNameCES: ["Pizza","Burger","Le tartare Vincent (photo non-contractuelle)"],
            dishesNameBar: ["Salade gourmande","Salade de pâtes","Salade Mexicaine"],
            priceJojo: ["8","12","25"],
            priceCaci: ["13","14","16"],
            priceSésé: ["15","5","1"],
            priceBardon: ["16","14","19"],
            priceCES: ["16","15","12"],
            priceBar: ["16","15","15"],
        }
    },
}
</script>

<style>
 .plat-img {
     width: 250px;
     height: 200px;
 }

 .restaurant-name {
     font-weight: bold;
 }
</style>