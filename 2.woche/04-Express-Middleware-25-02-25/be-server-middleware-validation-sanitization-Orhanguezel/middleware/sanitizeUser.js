
function capitalizeNames(req, res, next) {
    if (req.body.firstName) {
        req.body.firstName = req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.slice(1);
    }
    if (req.body.lastName) {
        req.body.lastName = req.body.lastName.charAt(0).toUpperCase() + req.body.lastName.slice(1);
    }

    next();
}


function sortBands(req, res, next) {
    if (Array.isArray(req.body.favoriteBands)) {
        req.body.favoriteBands.sort();
    }
    next();
}


function convertNumbers(req, res, next) {
    if (req.body.age) {
        req.body.age = Number(req.body.age);
    }
    if (req.body.fbw) {
        req.body.fbw = Number(req.body.fbw);
    }
    next();
}


export { capitalizeNames, sortBands, convertNumbers };
