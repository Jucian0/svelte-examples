import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'jucian0',
	}
});

window.app = app;

export default app;