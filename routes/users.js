import { Router } from 'express';

const usersRouter = Router();

usersRouter.route("/")
    .get((req, res) => { res.send("Get all users") })
    .delete((req, res) => { res.send("Delete all users") })
    .post((req, res) => { res.send("New User Created") });
usersRouter.route("/:id")
    .patch((req, res) => { res.send("user Updated") })
    .get((req, res) => { res.send("Get user by id") })
    .delete((req, res) => { res.send("Delete user by id") });

export default usersRouter;