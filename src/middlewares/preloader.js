import * as noteService from '../data/note.js'

export function preloadPoster(param) {
    return async function (ctx, next) {
        const id = ctx.params[param];

        if (id) {
            const data = await noteService.getById(id);
            ctx.data = data;
        };
        
        next();
    }
}