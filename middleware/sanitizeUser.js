export const sanitizeName = (req, res, next) => {
    console.log('We are sanitizing the name');
    req.body.firstName = 
    req.body.firstName.charAt(0).toUpperCase() + 
    req.body.firstName.slice(1);

    req.body.lastName = 
    req.body.lastName.chatAt(0).toUpperCase() + req.body.lastName.slice(1);

    next();
}

export const favoriteBands = (req, res, next) => {
    req.body.favoriteBands.sort();
    next()
}

export const stringToNumbers = (req, res, next) => {
    req.body.age = parseInt(req.body.age);
    req.vody.fbw = parseInt(req.body.fbw);

    next();
}