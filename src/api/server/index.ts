import * as fs from 'fs';
import * as restify from 'restify';
import {jsonp} from "restify";

export default class RestServer {

    private server : restify.Server;
    private port : number;

    constructor(port : number) {
        this.server = restify.createServer();
        this.port = port;
        this.init();
        this.createRoutes();
    }

    private init() : void {
        this.server.use(restify.queryParser());
        this.server.use(restify.bodyParser());
    }

    private createRoutes() : void {
        const GET_PATH : string = '/api/game';
        this.server.get(GET_PATH, (req, res, next) => {
            res.send({request: 'GET /'});
            return next();
        });

        const GET_PARAM_PATH : string = '/api/game/:pathvar';
        this.server.get(GET_PARAM_PATH, (req, res, next) => {
            res.send({request: `GET / ${req.params.pathvar}`});
            return next();
        });

        const POST_PATH : string = '/api/game';
        this.server.post(POST_PATH, (req, res, next) => {
            return next(new restify.MethodNotAllowedError("POST not implemented yet"));
        });

        const PUT_PATH : string = '/api/game';
        this.server.put(PUT_PATH, (req, res, next) => {
            return next(new restify.MethodNotAllowedError("PUT not implemented yet"));
        });
    }

    public start() : void {
        this.server.listen(this.port, () => console.log(`Server is up and running on port: ${this.port} and url: ${this.server.url}`));
    }

    public toString = () : string => {
        return `RestServer (port: ${this.port}, url: ${this.server.url})`;
    }
}