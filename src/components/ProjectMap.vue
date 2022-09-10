<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background-color: #198754;border: 1px solid #198754;"
          dark
          class="mainWrapBtn"
          v-bind="attrs"
          v-on="on"
        >
          Карта
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          Карта
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px;font-size: 15px;overflow: hidden;line-height: 1.6; height: 90vh;">
          <iframe src="https://yandex.ru/map-widget/v1/-/CCUVqUXNHB" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
  }
</script>