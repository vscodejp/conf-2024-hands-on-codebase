<template>
  <v-container>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="title" label="タイトル" required></v-text-field>
      <!-- TODO: 2カラムに変更し、右にmarkdown-itを使ったリアルタイムプレビューを実装してください -->
      <v-textarea v-model="content" label="内容" required></v-textarea>
      <v-btn type="submit">送信</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
const title = ref("");
const content = ref("");

const submit = async () => {
  await useFetch("/api/articles", {
    method: "POST",
    body: { title: title.value, content: content.value },
  });
  title.value = "";
  content.value = "";
};
</script>
