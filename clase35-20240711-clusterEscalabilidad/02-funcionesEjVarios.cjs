//
// my-functions.js
//


function setJSONBody(requestParams, context, ee, next) {
    return next(); // MUST be called for the scenario to continue
}

function logHeaders(requestParams, response, context, ee, next) {
    let valorCookie1=response.headers["set-cookie"][0].split("=")[1].split(";")[0]
    // console.log(response.headers);
    console.log("VALOR COOKIE 1:",valorCookie1)
    context.vars["cookieLeida"] = valorCookie1;
    return next(); // MUST be called for the scenario to continue
}

module.exports = {
    setJSONBody: setJSONBody,
    logHeaders: logHeaders,
};