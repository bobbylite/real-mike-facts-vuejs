export async function request(method, url, authorization, data) {
    try {
        let response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: data ? {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authorization,
                'Referrer-Policy': 'no-referrer-when-downgrade',
                'Access-Control-Allow-Origin': 'realmikefacts.com'
            } : {
                'Content-Type': 'application/json',
                'Referrer-Policy': 'no-referrer-when-downgrade',
                'Access-Control-Allow-Origin': 'realmikefacts.com'
            },
            credentials: 'include'
        });

        return response.json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function getData(url, authorization) {
    return await request("GET", url, authorization);
}

export async function postData(url, authorization, data) {
    return await request("POST", url, authorization, data);
}

export async function putData(url, authorization, data) {
    return await request("PUT", url, authorization, data);
}

export async function optionsData(url, authorization, data) {
    return await request("OPTIONS", url, authorization, data);
}