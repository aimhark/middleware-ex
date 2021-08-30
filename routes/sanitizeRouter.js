import express from 'express';
const router = express.Router();

import {
    sanitizeName,
    favoriteBands,
    stringToNumbers
} from '../middleware/sanitizeUser.js';

router.route('/sanitizeUser').post(sanitizeName, favoriteBands, stringToNumbers);

export default router;