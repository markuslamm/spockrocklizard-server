import * as fs from 'fs';
import * as restify from 'restify';

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
        this.server.get('/test/:param', (req, res, next) => {
            res.send(req.params);
            return next();
        });
    }

    public start() : void {
        this.server.listen(this.port, () => console.log(`Server is up and running on port: ${this.port}`));
    }

    public toString = () : string => {
        return `RestServer (port: ${this.port})`;
    }
}