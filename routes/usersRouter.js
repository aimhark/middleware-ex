import express from 'express';
const router = express.Router();

import {
    isUserValid,
    isUserOver18,
    isUserInFbw,
    // successMessage
} from '../middleware/userValidation.js';

router.route('/validateUser').post(isUserValid, isUserOver18, isUserInFbw, 
    // successMessage
    );

export default router;