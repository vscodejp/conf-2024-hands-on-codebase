<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>{{ article.title }}</h1>
        <div v-html="renderedContent"></div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from "vue";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const { data: article } = await useFetch(
  `/api/articles/${useRoute().params.id}`
);
const renderedContent = ref("");

if (article.value) {
  renderedContent.value = md.render(article.value.content);
}

watch(article, (newValue) => {
  renderedContent.value = md.render(newValue.content);
});
</script>
