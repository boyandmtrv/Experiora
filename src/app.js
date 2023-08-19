import page from './lib/page.mjs';
import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { addUserNav } from './middlewares/userNav.js';
import { getUserData } from './utils.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { navTemplate } from './views/nav.js';
import { registerView } from './views/register.js';

page(addRender(document.querySelector('main'), document.querySelector('header')));
page(addSession(getUserData));
page(addUserNav(navTemplate));

page('/', homeView);
page('/notes', catalogView)
page('/notes/:id', ({params: {id}}) => console.log('details', id))
page('/create', createView);
page('/login', loginView);
page('/register', registerView);

page.start();