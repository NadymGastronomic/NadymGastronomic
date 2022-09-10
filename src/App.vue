<template>
  <v-app>
    <v-main>
      <div class="mainWrap">
        <div class="titleWrap" :class="{'titleWrapSmall': $vuetify.breakpoint.xs}">
          <h1 class="mainTitle" style="font-size: 34px !important;">Гастрономическое наследие Надыма</h1>
          
          <p class="blockquote">
            Online-выставка об организации системы общественного питания в Надыме в 1970-80-х годах и о людях, стоявших у истоков первых столовых.
          </p>
          <app-project-map style="display: inline;margin: 0 10px;"></app-project-map>
          
          <router-view style="display: inline;"/>
          <hr style="margin-top:20px;">
          <p class="signature" style="margin-bottom: 0px !important;">&copy; 2022</p>
          <p class="signature" style="margin: 0px !important;"><a href="https://vk.com/museumnadym" target="_blank">Музей истории и археологии г. Надыма</a></p>
          <p class="signature" style="margin-top: 0px !important;"><a href="https://vk.com/history_photo_nadym" target="_blank">Сообщество "Надым в объективе"</a></p>
          <br/>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
      return {
        dialog: false,
        id: this.$route.params.id,
      }
    },
};
</script>

<style>
  @font-face {
    font-family: 'Segoe UI Light';
    src: url('assets/fonts/SegoeUI-Light.eot');
    src: url('assets/fonts/SegoeUI-Light.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/SegoeUI-Light.woff') format('woff'),
    url('assets/fonts/SegoeUI-Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
  html, body{
    height:100%;
    overflow: hidden !important;
    width: 100%;
  }

  .mainWrap{
    background: url(assets/images/main.jpg) no-repeat;
    background-position: left top;
    background-size: cover;
    height:100%;
    padding: 30px;
    width:100%;
    display: flex;
    justify-content: end;
    align-items: end;
  }

  .titleWrap{
    background: rgba(226, 227, 229, 0.88);
    border: 1px solid #d3d6d8;
    border-radius: .25rem;
    color: #212529;
    padding: 16px 16px 0;
    text-align: center;
    width: 328px;
  }

  .titleWrapSmall{
    width: 100%;
  }

  .mainLogo{
    height: 72px;
    margin: 0 auto;
    width: 72px;
  }

  .mainTitle{
    font-size: calc(1.375rem + 1.5vw);
    font-family: 'Segoe UI Light';
    font-weight: 300;
    margin-bottom: 30px;
  }

  .mainWrapBtn{
    margin-right: 10px;
    margin-bottom: 10px;
    text-transform: inherit !important;
    font-weight: 300 !important;
    font-size: 0.9rem !important;
  }
  
  .signature{
    font-size: 0.85rem;
    margin: 10px 0 !important;
  }

  iframe{
    border: 0px;
  }
</style>