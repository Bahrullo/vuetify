import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    themes: {
      light: {
        dblue: '#1c2335',
        yell: '#efc65e',
        redd: '#d14650',
        gree: '#47bf83',
      }
    }
  }
});
