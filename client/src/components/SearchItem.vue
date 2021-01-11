<template lang="pug">
div.search__bar
    input.searchbar__input(type="text" placeholder="Search" @change="searchFunction(todo)" v-model="todo")
</template>

<script>
import { defineComponent, inject, ref, watch } from "vue";

export default defineComponent({
	name: "SearchTodo",
	setup() {
		const global = inject('global');
		let todo = ref('');
		function searchFunction (todo) {
			return global.searchTodo(todo);
        }
        watch(todo, (newValue) => {
            todo = newValue;
            searchFunction(todo);
        })
		return {
			global,
			todo,
		}
	}
});
</script>

<style scoped>
.search__bar {
	margin: 3rem auto 1rem;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding:  0.5rem 1rem;
	background-color: #DBDBDB;
	text-align: center;
}
.searchbar__input {
	border: none;
	width: 100%;
	background-color: #DBDBDB;
	outline: none;
}
</style>