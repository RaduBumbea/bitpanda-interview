<template lang="pug">
div.pagination
    span Previous
    span |
    span Next
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent ({

});
</script>

<style scoped>
.pagination {
    margin: 3rem auto 1rem;
	max-width: 10rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
    background-color: var(--white);
}
</style>