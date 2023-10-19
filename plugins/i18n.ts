import { createI18n } from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: "ko",
    legacy: false, // Composition API에서 사용하기 위해선 false 값을 주어야함
    messages: {
      ko: {
        index: "메인 페이지",
        detail: "상세 페이지",
        go: "상세 페이지로 이동",
        back: "뒤로 가기",
        error: "에러",
      },
      en: {
        index: "main page",
        detail: "detail page",
        go: "go to detail page",
        back: "go back",
        error: "error",
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
  nuxtApp.provide("i18n", i18n);
});
