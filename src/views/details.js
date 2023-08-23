import { html, nothing } from "../lib/lit-html.js";
import * as noteService from "../data/note.js";

const detailsTemplate = (note, hasUser, isOwner, onDelete) => html`
<article class="details-article">
    <h3>${note.name}</h3>
    <p>Location: ${note.location}</p>
    <p>Rating: ${note.rating}</p>
    <p>Description: ${note.description}</p>
    ${hasUser && !isOwner ? html`<a href="/int/${note.objectId}">Interested</a>` : nothing}
    ${isOwner ? html`
    <a href="/edit/${note.objectId}">Edit</a>
    <a href="javascript:void(0)" @click=${onDelete}>Delete</a>` : nothing}
</article>
`; 

export async function detailsView(ctx) {

    const id = ctx.params.id;
    const hasUser = Boolean(ctx.user);

    const isOwner = ctx.data?.owner?.objectId === ctx.user?.objectId;

    if (isOwner) {
       
    };

    ctx.render(detailsTemplate(ctx.data, hasUser, isOwner, onDelete))

    async function onDelete() { 
        const choice = confirm('Are you sure you want to take down this post?');

        if (choice) {
            await noteService.deleteById(id);
            ctx.page.redirect('/notes');
        };
    };
};
