export async function request(method, url, data) {
    try {
        let response = await fetch(url,
        {
            method: method,
            body: JSON.stringify(data),
            headers: data ? {'Content-Type': 'application/json'} : {}
        });

        return response.json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function getData(url) {
    return await request("GET", url);
}

export async function postData(url, data) {
    return await request("POST", url, data);
}

export async function putData(url, data) {
    return await request("PUT", url, data);
}

export async function optionsData(url, data) {
    return await request("OPTIONS", url, data);
}

export function setCookieData(data) {
    Document.cookie = 'access_token=' + data.token;
}

export function test() {
    console.log("Testing!");
}