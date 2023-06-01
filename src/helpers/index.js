export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;HttpOnly";
}

export function getCookie(cname) {
    let cookies = document.cookie.split(';');
    let cookieVal = ""
    
    cookies.forEach((elt) => {
        const splitCookieVal = elt.split("=");
        if (splitCookieVal[0].trim() === cname.trim()) {
            cookieVal = splitCookieVal[1];
            return;
        }
    })
    return cookieVal;
}