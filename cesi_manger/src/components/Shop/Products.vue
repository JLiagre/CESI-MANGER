<template>
    <div class="products">
        <h3>Produits</h3>
        <div class="card mt-5">
            <div class="card-header">Liste des produits</div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th>Nom</th>
                                <th>Prix (€)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <template>
                                    <td>1</td>
                                    <td>Test</td>
                                    <td>10</td>
                                    <td>
                                        <a href="/product" class="icon">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                        <a href="#" class="icon">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                        <a href="#" class="icon">
                                            <i class="fa fa-pencil"></i>
                                        </a>
                                    </td>
                                </template>
                            </tr>
                            <!-- ******************************************* -->
                            <!-- Ici j'ai préparé le code pour lier à la BDD -->
                            <!-- ******************************************* -->
                            <!-- <tr v-for="product in sortedProducts" v-bind:key="product.id">
                                <template v-if="editId == product.id">
                                    <td>
                                        <input v-model="editProductData.product_id" type="text" />
                                    </td>
                                    <td>
                                        <input v-model="editProductData.product_name" type="text" />
                                    </td>
                                    <td>
                                        <input
                                        v-model="editProductData.product_price"
                                        type="text"
                                        />
                                    </td>
                                    <td>
                                        <span class="icon">
                                            <i @click="onEditSubmit(product.id)" class="fa fa-check"></i>
                                        </span>
                                        <span class="icon">
                                            <i @click="onCancel" class="fa fa-ban"></i>
                                        </span>
                                    </td>
                                </template>
                                <template v-else>
                                    <td>{{ product.product_id }}</td>
                                    <td>{{ product.product_name }}</td>
                                    <td>{{ product.product_price }}</td>
                                    <td>
                                        <a href="#" class="icon">
                                            <i v-on:click="onDelete(product.id)" class="fa fa-trash"></i>
                                        </a>
                                        <a href="#" class="icon">
                                            <i v-on:click="onEdit(product)" class="fa fa-pencil"></i>
                                        </a>
                                        <router-link
                                        :to="{
                                            name: 'product',
                                            params: { id: product.id },
                                        }"
                                        class="icon"
                                        >
                                        <i class="fa fa-eye"></i>
                                        </router-link>
                                    </td>
                                </template>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Products',
    
    /* *********************************************** */
    /* Ici j'ai préparé les scripts pour lier à la BDD */
    /* *********************************************** */
    /*data () {
        return {
        editId: '',
        productData: {
            'id' : '',
            'product_id': '',
            'product_name': '',
            'product_price': ''
        },
        editProductData: {
            'id' : '',
            'product_id': '',
            'product_name': '',
            'product_price': ''
        },
        products: []
        }
    },
    created() {
        this.getProducts()
    },
    computed:{
        sortedProducts(){
        return this.products.slice().sort((a,b)=>{
            return a.product_id - b.product_id
        })
        }
    },
    methods: {
        getProducts() {
        db.collection('products').get().then(querySnapshot =>{
            const products = []
            // querySnapshot.forEach((doc)=>{
            //   products.push(doc.data())
            // })
            const productsArray = []
            let i = 0
            querySnapshot.forEach((doc)=>{
            productsArray.push(doc.data())
            productsArray[i].id = doc.id
            products.push(productsArray[i])
            i++
            })
            // for(let key in querySnapshot.docs){
            //   productsArray.push(querySnapshot.docs[key].data())
            //   productsArray[key].id = querySnapshot.docs[key].id
            //   products.push(productsArray[key])
            // }
            this.products = products
        })
        },
        onSubmit(){
        db.collection('products').add(this.productData).then(this.getProducts)
        this.productData.product_id = ''
        this.productData.product_name = ''
        this.productData.product_price = ''
        },
        // onDelete(product_id){
        //   db.collection('products').where('product_id', '==', product_id).get().then(querySnapshot =>{
        //     querySnapshot.forEach(doc=>{
        //       doc.ref.delete().then(this.getProducts)
        //     })
        //   })
        // }
        onDelete(id){
        db.collection('products').doc(id).delete().then((data)=> {
            this.getProducts()
        })
        },
        onEdit(product){
        this.editId = product.id
        this.editProductData.product_id = product.product_id
        this.editProductData.product_name = product.product_name
        this.editProductData.product_price = product.product_price
        },
        onCancel(){
        this.editId = ''
        this.editProductData.product_id = ''
        this.editProductData.product_name = ''
        this.editProductData.product_price = ''
        },
        onEditSubmit (id){
        db.collection("products").doc(id).set(this.editProductData).then(
            this.getProducts)
            this.editId = ''
            this.editProductData.product_id = ''
            this.editProductData.product_name = ''
            this.editProductData.product_price = ''
        }
    } */
}
</script>

<style>

.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}

.products {
    width: 80%;
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
}
</style>