import {Router} from 'express';
import {getSelfLoans} from '../../controllers/loanController.js'

const router = Router();

router.get("/", getSelfLoans)