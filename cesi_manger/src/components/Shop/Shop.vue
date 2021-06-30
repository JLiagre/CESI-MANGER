<template>
    <div>
        <menu-change v-if="connectedRestaurant != false"></menu-change>
        <menu-create v-if="connectedRestaurant != false"></menu-create>
        <product></product>
    </div>
</template>

<script>
import MenuChange from '../Menu/MenuChange.vue'
import MenuCreate from '../Menu/MenuCreate.vue'
import Product from '../Shop/Items/Product.vue'

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
        'product': Product,
    }
}
</script>

<style>

</style>