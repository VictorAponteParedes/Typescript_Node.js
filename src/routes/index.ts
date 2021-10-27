import { Router , Request } from "express";
const router:Router = Router();
import { indexController } from "../controllers/indexControllers";


router.get('/' , indexController.index)

router.get('/about' , (req , res)=>{
    res.render('about')
})



export default  router;