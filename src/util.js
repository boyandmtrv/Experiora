export function setUserData (data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
};

export function getUserData () {
    return JSON.parse(sessionStorage.getItem('userData'));
};
export function clearUserData () {
    sessionStorage.removeItem('userData');
};
export function createPointer(className, objectId) {
    return { __type: "Pointer", className, objectId};
};
export function addOwner(record, ownerId) {
    const data = Object.assign({}, record);
    data.owner = createPointer('_User', ownerId);

    return data;
}