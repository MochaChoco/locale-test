<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>

<template>
  <div>
    <p>{{ t("index") }}</p>
  </div>
  <NuxtLink
    :to="{
      name: 'pc-detail',
      params: { locale: locale === 'ko' ? '' : 'en' },
    }"
    >{{ t("go") }}</NuxtLink
  >
</template>
