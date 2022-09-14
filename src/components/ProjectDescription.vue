<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background-color: #0d6efd;border: 1px solid #0d6efd;"
          dark
          class="mainWrapBtn"
          v-bind="attrs"
          v-on="on"
        >
          Ключевые этапы
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          Ключевые этапы
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px 10px 20px 0;font-size: 15px;line-height: 1.6;background: #f3f3f3;">
          <v-timeline
            dense
          >
            <v-timeline-item
              v-for="obj in $store.state.timeline"
              :key="obj.id"
            >
              <v-card class="elevation-2">
                <v-card-title class="text-h5" style="word-break: break-word;">
                  {{obj.date}}
                </v-card-title>
                <v-card-text v-html="obj.text" style="word-break: break-word;"></v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        reverse: true,
      }
    },
  }
</script>