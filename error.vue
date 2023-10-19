<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

defineProps({
  error: {
    type: Object,
  },
});

const router = useRouter();
</script>

<template>
  <div>{{ error!.statusCode }} {{ t("error") }}</div>
</template>
