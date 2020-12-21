import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        userInput: ''
    }
});

export default app;