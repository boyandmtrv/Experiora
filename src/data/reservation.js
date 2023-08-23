import { addOwner, createPointer, encodeDate, encodeObject, filterRelation } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
    'reservationsByNoteId': (noteId) => '/classes/Reservation?where=' + encodeObject(filterRelation('note', 'Poster', noteId)) + '&include=owner',
    'reservations': '/classes/Reservation'
}

export async function getByNoteId(noteId) {
    const data =  await get(endpoints.reservationsByNoteId(noteId))
    data.results.forEach(n => {
        n.startDate = new Date(n.startDate.iso)
        n.endDate = new Date(n.endDate.iso)
    });

    return data;
};

export async function create(noteData, userId) {
    noteData = addOwner(noteData, userId);
    noteData.startDate = encodeDate(noteData.startDate);
    noteData.endDate = encodeDate(noteData.endDate);
    noteData.note = createPointer('Poster', noteData.note);
    noteData.host = createPointer('_User', noteData.host);
    return post(endpoints.reservations, noteData);
};