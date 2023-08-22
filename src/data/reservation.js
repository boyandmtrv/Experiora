import { get } from "./api.js";
import { encodeObject, filterRelation } from "../utils.js";

const endpoints = {
    'reservationsByPosterId': (posterId) => '/classes/Reservations?where=' + encodeObject(filterRelation('poster', 'Poster', posterId))
};

export async function getByPosterId(posterId) {
    return get(endpoints.reservationsByPosterId(posterId))
}