export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
};

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
};

export function clearUserData() {
    sessionStorage.removeItem('userData')
}; 

export function createPointer(className, objectId) {
    return { __type: "Pointer", className, objectId }
};

export function addOwner(record, ownerId) {
    const data = Object.assign({}, record);
    data.owner = createPointer('_User', ownerId);

    return data;
};

export function filterRelation (field, collection, objectId) {
    const relation = {
        [field]: createPointer(collection, objectId)
    }
    return relation
}


export function encodeObject(object) {
    return encodeURIComponent(JSON.stringify(object))
};


export function submitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries([...formData].map(([k, v]) => [k, v.trim()]));

        callback(data, event.target)
    };
};

