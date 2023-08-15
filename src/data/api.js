const host = 'https://parseapi.back4app.com';
const appId = 'pbRy5ERsynfadFeXiDHo58RFe8EhLIafvqte0gEr';
const apiKey = '96kgwrG4zy12spzAAIxFV2zh9uqfPMcc43C2xwBc';

async function request(method, url = '/', data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    try {
        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response;
        };

        const result = await response.json();

        if (response.ok != true) {
            console.log(result);
            throw new Error(result.message || result.error);
        };

        return result;

    } catch (err) {
        alert(err.message);
        throw err;
    };

};

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');