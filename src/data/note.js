import { addOwner } from "../util.js";
import { get, post, put, del } from "./api.js";

const endpoints = {
    'notes': '/classes/Poster',
    'noteById': '/classes/Poster/'
};

export async function getAll() {
    return get(endpoints.notes)
};

export async function getById(id) {
    return get(endpoints.noteById + id)
};

export async function create(notesData, userId) {
    return post(endpoints.notes, addOwner(notesData, userId))
};

export async function update(id, notesData, userId) {
    return put(endpoints.noteById + id, addOwner(notesData, userId))
};

export async function deleteById(id) {
    return del(endpoints.noteById + id)
};