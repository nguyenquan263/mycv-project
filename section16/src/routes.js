import Page1 from './routes/Page1.svelte';
import Page2 from './routes/Page2.svelte';

export default {
    '/page1': Page1,
    '/page2': Page2,
    '*': Page2
}

