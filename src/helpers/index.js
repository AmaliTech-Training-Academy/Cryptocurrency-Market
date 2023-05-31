export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    let ca = document.cookie.split(';');
    let cookieVal = ""
    ca.forEach((elt) => {
        const splitCookieVal = elt.split("=");
        if (splitCookieVal[0].trim() === cname.trim()) {
            cookieVal = splitCookieVal[1];
            return;
        }
    })
    return cookieVal;
}

// export function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//         alert("Welcome again " + user);
//     } else {
//         user = prompt("Please enter your name:", "");
//         if (user != "" && user != null) {
//         setCookie("username", user, 365);
//         }
//     }
// }