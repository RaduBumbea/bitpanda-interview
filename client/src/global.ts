import axios from 'axios';
import { reactive } from 'vue';
interface Todo {
    _id: number;
    createdAt: string;
    description: string;
    done: boolean;
    updatedAt: string;
}
interface Meta {
    hasNextPage: false;
    hasPrevPage: false;
    itemCount: 0;
    limit: 20;
    nextPage: null;
    offset: 0;
    page: 1;
    pageCount: 1;
    prevPage: null;
}
const url = 'http://localhost:3000/api/v1/';
const todos: Todo[] = [];
const state = reactive({
    items: todos,
    meta: {
        hasNextPage: false,
        hasPrevPage: false,
        itemCount: 0,
        limit: 20,
        nextPage: null,
        offset: 0,
        page: 1,
        pageCount: 1,
        prevPage: null
    }
});
const addTodo = (todo: string) => {
    axios.post(`${url}todo`, {
        _id: '',
        createdAt: '',
        description: todo,
        done: false,
        updatedAt: ''
    }).then((response: any) => {
        const res = response.data;
        state.items.push(res);
    }) .catch((error: any) => {
        console.log(error);
    });

}
const getTodo = async() => {
    const response = await axios.get(`${url}todo`)
    const data = response.data.items;
    state.items = data;
}
const deleteTodo = (item: Todo) => {
    axios.delete(`${url}todo/${item._id}`).then(() => {
        state.items = state.items.filter((todo) => todo._id !== item._id);
    }).catch(function(error) {
        console.log(error)
    }).then(function() {
        console.log('');
    });
}
const updateStatus = (item: Todo) => {
    item.done = !item.done;
    axios.put(`${url}todo/${item._id}`,item).then( () => {
        const item: any = state.items.find((todo) => todo._id === item._id);
    }).catch((error: any) => {
        console.log(error)
    }).then(() => {
        console.log('');
    });
}
const searchTodo = (todo: string) => {
    const items = state.items.filter(item => item.description.toLocaleLowerCase().includes(todo.toLocaleLowerCase()));
    state.items = items;
    if(todo === '') {
        getTodo();
    }
}
export default {
    state: state,
    addTodo,
    deleteTodo,
    updateStatus,
    searchTodo,
    getTodo,
};