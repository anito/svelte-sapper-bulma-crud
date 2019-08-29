import '../node_modules/bulma/css/bulma.min.css';
import '@sveltejs/site-kit/base.css';
import * as sapper from '@sapper/app';
import './style.css';

sapper.start({
	target: document.querySelector('#sapper')
});