import { Router } from "express";
const router:Router = Router()

import { bookControllers }from '../controllers/booksControllers'

router.get('/' , bookControllers.index)
router.get('/add' , bookControllers.renderFormBooks);

router.post('/add' , bookControllers.saveBook)

export default  router;