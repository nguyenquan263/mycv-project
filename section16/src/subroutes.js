import subPage1 from './routes/subpage1.svelte';
import subPage2 from './routes/subpage2.svelte';

export default {
    '/subpage1': subPage1,
    '/subpage2': subPage2,
    '*': subPage1
}

