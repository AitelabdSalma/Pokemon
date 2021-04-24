

export const fetchData = async (url, method, data) => {
    let headers = new Headers({
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    });

    if (data !== null) {
        return await fetch(url, {
            method,
            headers: headers,
            body: JSON.stringify(data)
        });
    } else {
        return await fetch(url, {
            method,
            credentials: "same-origin",
            mode: "cors",
            headers: headers
        });
    }
};