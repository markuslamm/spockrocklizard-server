import * as restify from 'restify';
import GameController  from '../controllers/GameController';

const Router = require('restify-router').Router;


const registerRoutes = (server: restify.Server, controller: GameController) => {
    const router = new Router();

    router.get('', (req: restify.Request, res: restify.Response, next: restify.Next) => {
        const result = controller.getGames();
        res.send(200, result);
        return next();
    });

    router.get('/:id', (req: restify.Request, res: restify.Response, next: restify.Next) => {
        const id = req.params.id;
        const result = controller.getGamesById(id);
        result ? res.send(200, result) : res.send(404, null);


        return next();
    });

    router.applyRoutes(server, '/api/game')
};

export default registerRoutes;