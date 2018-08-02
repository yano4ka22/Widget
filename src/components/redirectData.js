
export function redirectUrl(cityTranslit, from, to = "") {
    let url = "https://myrentacar.com/#!";
    url += cityTranslit + "/" + from + "/" + to;
    return url;
}