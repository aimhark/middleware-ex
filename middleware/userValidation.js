import createError from 'http-errors';

export const isUserValid = (req, res, next) => {
    console.log('Checking validity of user');
    try {
        const user = req.body;
        if(!user.firstName || !user.lastName || !user.age || !user.fbw || !user.email){
            const myError = (new createError(
                401,
                `All fields must be completed.`
            ));
            throw myError;
        }else{
            res.json('user created');
        }
        next();
    } catch (error) {
        next(error)
    }
}

export const isUserOver18 = (req, res, next) => {
    console.log('We are checking the age');
    try{
        const user = req.body;
        if(user.age < 18){
            const ageError = (new createError(
                401
                `Users must be over 18`
            ))
            throw ageError;
        }else{
            res.json('User created');
        }
        next();
    }catch(error){
        next(error)
    }
}


export const isUserInFbw = (req, res, next) => {
    const { fbw } = req.json;
    if(fbw !== '36'){
        const error = new createError(
            400,
            `User is not part of fbw 36`
        )
        next(error)
    }
    next();
}