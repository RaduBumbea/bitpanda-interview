<template lang="pug">
.todos
    ul.todos__list
        li.todos__item(v-for="todo in global.state.items" :key="todo.id" :class="{ 'todos__item--done': todo.done }")
            div.todos__details
                button.todos__check-btn(@click="global.updateStatus(todo)")
                    font-awesome-icon(icon="check-circle")
                p.todos__description {{ todo.description }} - {{ todo.createdAt }}
            button.todos__remove(@click="global.deleteTodo(todo)") x
</template>

<script>
import { defineComponent, inject, onMounted } from "vue";

export default defineComponent({
	name: "TodoList",
	setup() {
        const global = inject("global");
		onMounted(function() {
            global.getTodo();
        });
		return {
            global
		};
	}
});
</script>

<style scoped lang="scss">
.todos {
	$parent: &;
	&__list {
		padding: 0;
	}
	&__item {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #c6c6c6;
		padding: 0;
		&--done {
			#{ $parent } {
				&__check-btn {
					color: #20bf6b;
				}
				&__description {
					text-decoration: line-through;
				}
			}
		}
	}
&__details {
	display: flex;
}
	&__check-btn,
	&__remove {
		color: #7e8187;
		outline: none;
		cursor: pointer;
		border: none;
		background-color: var(--white);
}
}

</style>