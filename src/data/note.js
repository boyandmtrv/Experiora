import { addOwner, encodeObject, filterRelation } from "../utils.js";
import { get, post, put, del } from "./api.js";

const endpoints = {
    'posters': `/classes/Poster?where=${encodeObject({ readyForTest: true })}&include=owner`,
    'postersWithUser': (userId) => `/classes/Poster?where=${encodeObject({ $or: [{ readyForTest: true }, filterRelation('owner', '_User', userId)] })}&include=owner`,
    'posterById': '/classes/Poster/',
};

export async function getAll(userId) {

    if (userId) {
        return get(endpoints.postersWithUser(userId))
    } else {
        return get(endpoints.posters)
    }
};

export async function getById(id) {
    return get(endpoints.posterById + id);
};

export async function create(noteData, userId) {
    return post(endpoints.posters, addOwner(noteData, userId))
};

export async function update(id, noteData, userId) {
    return put(endpoints.posterById + id, addOwner(noteData, userId))
};

export async function deleteById(id) {
    return del(endpoints.posterById + id)
};

// 'posters': `/classes/Poster?where=${encodeObject({ readyForTest: true })}&include=owner`,
// 'postersWithUser': (userId) => `/classes/Poster?where=${encodeObject({ $or: [{ readyForTest: true }, filterRelation('owner', '_User', userId)] })}&include=owner`,