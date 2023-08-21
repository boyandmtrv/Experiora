import { html, nothing } from "../lib/lit-html.js";

const detailsTemplate = (note, isOwner) => html`
    <h2>${note.name}</h2>
    ${isOwner ? html`
    <a href="/edit/${note.objectId}">Edit</a>
    <a href="javascript:void(0)">Delete</a>` : nothing}
`; 

export async function detailsView(ctx) {

    const isOwner = ctx.data?.owner?.objectId === ctx.user?.objectId
    ctx.render(detailsTemplate(ctx.data, isOwner))
};
