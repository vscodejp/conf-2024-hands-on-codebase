<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>記事一覧</h1>
        <!-- TODO: Vuetifyのv-listで置き換えてください -->
        <div v-for="article in articles" :key="article.id">
          <h2>
            <a :href="`/articles/${article.id}`">{{ article.title }}</a>
          </h2>
          <p>{{ new Date(article.createdAt).toLocaleString("ja-JP") }}</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const { data: articles } = await useFetch("/api/articles");
</script>
