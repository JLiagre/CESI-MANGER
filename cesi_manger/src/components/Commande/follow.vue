<template>
  <v-container>
    <v-row className="justify-center">
      <v-col sm="8" md="8" lg="8" xl="8" className="justify-center">
        <v-card className="mt-3"
          ><Map></Map>
          <div className="row mt-1 justify-center">
            <div className="col-2 text-center">
              <div>
                <span>Commande acceptée</span>
              </div>
              <div>
                <v-icon x-large> mdi-clipboard-list</v-icon>
              </div>
            </div>
            <div className="col-1"><span> -------------- </span></div>
            <div className="col-2 text-center">
              <div>
                <span>Commande prête</span>
              </div>
              <div>
                <v-icon x-large> mdi-food</v-icon>
              </div>
            </div>
            <div className="col-1"><span> -------------- </span></div>

            <div className="col-2 text-center">
              <div>
                <span>Coursier en chemin</span>
              </div>
              <div>
                <v-icon x-large> mdi-run-fast</v-icon>
              </div>
            </div>
            <div className="col-1"><span> -------------- </span></div>
            <div className="col-2 text-center">
              <div>
                <span>Commande livré</span>
              </div>
              <div>
                <v-icon x-large> mdi-bell-ring</v-icon>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col sm="2" md="2" lg="2" xl="2" className="justify-center">
        <v-card className="mt-3">
          <div className="col-12 text-center pl-5">
            <v-img
              alt="CESI'EAT Logo"
              className="shrink"
              contain
              src="@/assets/cesieat_no_image.png"
              width="300"
              height="100%"
            />
          </div>
          <div className="col-12 text-center">
            <div>
              <span>Livreur :</span>
            </div>
            <div>
              <span>Milinkovitch</span>
            </div>
            <div>
              <span>Julien</span>
            </div>
            <div>
              <span>0675245698</span>
            </div>
            <div>
              <span>2/5 </span>
              <v-icon dense> mdi-star</v-icon>
            </div>
          </div>
        </v-card>

        <v-card className="mt-10 pb-2">
          <div className="col-12 text-center pl-5">
            <v-img
              alt="CESI'EAT Logo"
              className="shrink"
              contain
              src="@/assets/cesieat_no_image.png"
              height="100%"
              width="300"
            />
          </div>
          <div className="col-12 text-center">
            <div>
              <span>Restaurant :</span>
            </div>
            <div>
              <span>Pizza Hut</span>
            </div>
            <div>
              <span>225 Boulevard Godard</span>
            </div>
            <div>
              <span>4/5 </span>
              <v-icon dense> mdi-star</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from '@/components/Map'
export default {
  name: 'Follow',
  components: { Map },
  methods: {},
  data: () => ({}),
}
</script>
