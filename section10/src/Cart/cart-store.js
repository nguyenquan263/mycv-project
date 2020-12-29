import { writable } from 'svelte/store'

const cart = new writable([
    {
        id: "p1",
        title: "Test",
        price: 9.99
    },
    {
        id: "p2",
        title: "Test",
        price: 9.99
    }
]);

const customCart = {
    subscribe: cart.subscribe,
    addItem: (item) => {
        cart.update((items) => {
            return [
                ...items,
                item
            ];
        });
    },
    removeItem: (id) => {
        cart.update((items) => {
            return items.filter(i => i.id !== id);
        });
    }
}

export default customCart;