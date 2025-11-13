import { Router } from 'express';

const authRouter = Router();


authRouter.route("sign-up").post((req, res) => { res.send("signed up successfully") });
authRouter.route("login").post((req, res) => { res.send("logged in successfully") });

export default authRouter;