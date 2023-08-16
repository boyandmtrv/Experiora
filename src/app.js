import page from './lib/page.mjs';
import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { getUserData } from './utils.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';

page(addRender(document.querySelector('main')));
page(addSession(getUserData));

page('/', '/notes');
page('/notes', catalogView)
page('/notes/:id', ({params: {id}}) => console.log('details', id))
page('/create', createView)

page.start();