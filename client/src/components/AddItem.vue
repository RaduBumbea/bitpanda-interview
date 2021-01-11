<template lang="pug">
.form
    form.form__body(@submit.prevent="submitTodo")
        input.form__input(type="text" placeholder="Take a note" v-model="todo")
        button.form__submit +
</template>

<script>
import { defineComponent, ref, inject } from "vue";

export default defineComponent({
	name: "AddItem",
	setup() {
		const global = inject("global");
		const todo = ref("");

		function submitTodo() {
			global.addTodo(todo.value);
            todo.value = "";
		}

		return {
			todo,
			global,
			submitTodo
		};
	}
});
</script>

<style scoped>
.form__body {
	display: flex;
	flex-direction: row;
	padding: 0.2rem;
	width: 100%;
}
.form__input {
	width: 100%;
	flex-grow: 2;
	border: none;
	font-size: 16px;
	line-height: 18.75px;
}
.form__input:focus {
	outline: none;
}
.form__submit {
	border: none;
	font-size: 30px;
	font-weight: lighter;
	background-color:var(--white);
	color: #a3a3a3;
    outline: none;
}
</style>