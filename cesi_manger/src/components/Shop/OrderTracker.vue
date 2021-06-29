<template>
    <div class="orders">
        <div class="card mt-5">
            <div class="card-header">Vos commandes</div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Etat</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="command in commands" v-bind:key="command.id">
                                <td>{{ command.command_id }}</td>
                                <td class="prices">{{ command.command_price }}</td>
                                <td>{{ command.command_status }}</td>
                                <td v-if="command.command_status == 'livré'"><i class="fas fa-check"></i></td>
                                <td v-else-if="command.command_status == 'livraison'"><i class="fas fa-motorcycle"></i></td>
                                <td v-else-if="command.command_status == 'annulée'"><i class="fas fa-times"></i></td>
                                <td v-else><i class="far fa-clock"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'orders',

    // Test avec data fictives
    //
    data: () => ({
    commands: [
        { 
        command_id: 1, 
        command_price: 10.99, 
        command_status: "livré" 
        },
        { 
        command_id: 2,
        command_price: 5.99,
        command_status: "livraison"
        },
        {
        command_id: 3,
        command_price: 1.99,
        command_status: "préparation"
        },
        {
        command_id: 4,
        command_price: 18.00,
        command_status: "annulée"
        },
    ],
  }),
}
</script>

<style>
    .orders {
    width: 80%;
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
    }

    .orders td.prices:after {
    content: ' €';
    }
</style>