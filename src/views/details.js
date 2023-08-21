import { html, nothing } from "../lib/lit-html.js";

const detailsTemplate = (note, hasUser, isOwner) => html`
    <h3>${note.name}</h3>
    <p>Location: ${note.location}</p>
    <p>Rating: ${note.rating}</p>
    <p>Description: ${note.description}</p>
    ${hasUser && !isOwner ? html`<a href="/int/${note.objectId}">Interested</a>` : nothing}
    ${isOwner ? html`
    <a href="/edit/${note.objectId}">Edit</a>
    <a href="javascript:void(0)">Delete</a>` : nothing}
`; 

export async function detailsView(ctx) {

    const hasUser = Boolean(ctx.user);

    const isOwner = ctx.data?.owner?.objectId === ctx.user?.objectId
    ctx.render(detailsTemplate(ctx.data, hasUser, isOwner))
};
