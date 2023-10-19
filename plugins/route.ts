import { useRouter } from "vue-router";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();
  router.beforeEach(async (to, from) => {
    // url에서 locale 읽어서 설정함
    let locale = to.params.locale;
    if (!locale) {
      locale = "ko";
    }

    // console.log('locale', to, from);
    nuxtApp.$i18n.global.locale.value = locale;
  });
});
