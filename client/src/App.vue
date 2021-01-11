<template lang="pug">
div
  SearchItem
  div.todo__main
    AddItem
    ItemList
    div
  Pagination
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import AddItem from "./components/AddItem.vue";
import SearchItem from "./components/SearchItem.vue";
import ItemList from "./components/ItemList.vue";
import Pagination from "./components/Pagination.vue";
import global from "./global";

export default defineComponent({
	name: "App",

	components: {
		AddItem,
		SearchItem,
		ItemList,
		Pagination,
	},
	setup() {
		provide("global", global);
	},
});
</script>

<style>
body {
	background-color: #e5e5e5;
}
.todo__main {
	background-color: var(--white);
	margin: 1rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
}
:root {
	--white: #ffffff;
}
</style>
