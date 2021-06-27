<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Chez Jojo</h3>
                <img class="plat-img" src="../assets/images/hotdog.jpg" alt="chez Jojo plat 1">
                <p>Hot-Dog classique : 8€</p>
                <img class="plat-img" src="../assets/images/hotdogvégé.jpg" alt="chez Jojo plat 2">
                <p>Hot-Dog végétarien : 12€</p>
                <img class="plat-img" src="../assets/images/hotdogiguess.jpg" alt="chez Jojo plat 3">
                <p>Hot-Dog chinois : 25€</p>
            </div>
            <div class="col">
                <h3>C'est Caci parfait</h3>
                <img class="plat-img" src="../assets/images/bolognaise.jpg" alt="Caci parfait plat 1">
                <p>Pâtes bolognaise : 13€</p>
                <img class="plat-img" src="../assets/images/carbonara.jpg" alt="Caci parfait plat 2">
                <p>Pâtes carbonara : 14€</p>
                <img class="plat-img" src="../assets/images/cannelloni.jpg" alt="Caci parfait plat 3">
                <p>Cannelloni : 16€</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>C'est Sésé qui régale</h3>
                <img class="plat-img" src="../assets/images/craquottelégume.jpg" alt="c'est Sésé plat 1">
                <p>Craquottes aux légumes bio : 15€</p>
                <img class="plat-img" src="../assets/images/craquotteclassique.jpg" alt="c'est Sésé plat 2">
                <p>Craquottes et verre d'eau : 5€</p>
                <img class="plat-img" src="../assets/images/festinafricain.jpg" alt="c'est Sésé plat 3">
                <p>Le festin Africain : 1€</p>
            </div>
            <div class="col">
                <h3>Au bon Bardon</h3>
                <img class="plat-img" src="../assets/images/bibimbap.jpg" alt="bon Bardon plat 1">
                <p>Bibimbap : 16€</p>
                <img class="plat-img" src="../assets/images/ddeokbokki.jpg" alt="bon Bardon plat 1">
                <p>Ddeokbokki : 14€</p>
                <img class="plat-img" src="../assets/images/bbqcoréen.jpg" alt="bon Bardon plat 1">
                <p>Barbecue coréen : 19€</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h3>CES'Eat</h3>
                <img class="plat-img" src="../assets/images/pizza.jpg" alt="CES'Eat plat 1">
                <p>Pizza : 16€</p>
                <img class="plat-img" src="../assets/images/burger.jpg" alt="CES'Eat plat 2">
                <p>Burger : 15€</p>
                <img class="plat-img" src="../assets/images/spécialvincent.jpg" alt="CES'Eat plat 3">
                <p>Le tartare Vincent (photo non-contractuelle) : 12€</p>
            </div>
            <div class="col">
                <h3>Salade Bar</h3>
                <img class="plat-img" src="../assets/images/salade1.jpg" alt="pif plat 1">
                <p>Salade gourmande : 16€</p>
                <img class="plat-img" src="../assets/images/salade2.jpg" alt="pif plat 2">
                <p>Salade de pâtes : 15€</p>
                <img class="plat-img" src="../assets/images/salade3.jpg" alt="pif plat 3">
                <p>Salade Mexicaine : 15€</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu1',
    data() {
        return{
            restaurantName1: "Restaurant La Plage",
            restaurantName2: "Chez Jojo",
            restaurantName3: "Au bon Caci",
            restaurantName4: "Le bon Bardon",
            restaurantName5: "C'est Sésé qui régale",
            restaurantName6: "Random resto parce que j'ai plus d'idée",
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