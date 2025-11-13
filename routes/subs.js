import { Router } from 'express';

const subsRouter = Router();

subsRouter.route("/")
    .get((req, res) => { res.send("Get all subs") })
    .delete((req, res) => { res.send("Delete all subs") })
    .post((req, res) => { res.send("New sub Created") });
subsRouter.route("/:id")
    .patch((req, res) => { res.send("sub Updated") })
    .get((req, res) => { res.send("Get sub by id") })
    .delete((req, res) => { res.send("Delete sub by id") });


export default subsRouter;