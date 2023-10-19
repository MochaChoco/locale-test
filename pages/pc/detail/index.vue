<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
</script>

<template>
  <div>
    <p>{{ t("detail") }}</p>
  </div>

  <a href="#" @click="router.go(-1)">{{ t("back") }}</a>
</template>
