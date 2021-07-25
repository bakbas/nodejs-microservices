import express from "express";
import argon2 from "argon2";

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        res.status(200).send([]);
    }

    async getUserById(req: express.Request, res: express.Response) {
        res.status(200).send([]);
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        res.status(201).send({});
    }

    async patch(req: express.Request, res: express.Response) {
        if (req.body.password) {
            req.body.password = await argon2.hash(req.body.password);
        }
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        res.status(204).send();
    }
}

export default UsersController;
