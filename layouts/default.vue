<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-title>ブログ</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn :to="'/'">トップページ</v-btn>
      <v-btn :to="'/articles/new'">記事投稿</v-btn>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
