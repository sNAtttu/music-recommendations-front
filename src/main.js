import App from './App.svelte';

const apiBaseUrl = process.env.isProd ? 'https://music-recommendations.azurewebsites.net/api/' : 'http://localhost:7071/api/';

const app = new App({
	target: document.body,
	props: {
		name: 'Santeri',
		apiBaseUrl,
	}
});

export default app;