<template>
    <div class="access-menu">
        <div class="row">
            <div class="col">
                <router-link :to="'/jojo'" class="btn btn-primary">
                    Chez Jojo
                </router-link>
            </div>
            <div class="col">
                <router-link :to="'/caci'" class="btn btn-primary">
                    Caci parfait
                </router-link>
            </div>
            <div class="col">
                <router-link :to="'/bardon'" class="btn btn-primary">
                    Bon Bardon
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link :to="'/sésé'" class="btn btn-primary">
                    Sésé régale
                </router-link>
            </div>
            <div class="col">
                <router-link :to="'/ces'" class="btn btn-primary">
                    CES'EAT
                </router-link>
            </div>
            <div class="col">
                <router-link :to="'/salade'" class="btn btn-primary">
                    Salade bar
                </router-link>
            </div>
        </div>
        <menu-change v-if="connectedRestaurant != false"></menu-change>
        <menu-create v-if="connectedRestaurant != false"></menu-create>
        <product-change v-if="connectedRestaurant != false"></product-change>
        <product-create v-if="connectedRestaurant != false"></product-create>
    </div>
</template>

<script>
import MenuChange from '../Menu/MenuChange.vue'
import MenuCreate from '../Menu/MenuCreate.vue'
import ProductCreate from '../Menu/ProductCreate.vue'
import ProductChange from '../Menu/ProductChange.vue'

export default {
    name: 'Shop',
    data() {
        return {
            connectedRestaurant: false,

        }
    },
    components:{
        'menu-change': MenuChange,
        'menu-create': MenuCreate,
        'product-change': ProductChange,
        'product-create': ProductCreate,
    }
}
</script>

<style>
    .access-menu {
        padding: 5em;
    }
</style>