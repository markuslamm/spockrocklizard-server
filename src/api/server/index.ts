import * as restify from 'restify';
import registerRoutes from '../routes/GameRoutes';
import GameController  from '../controllers/GameController';

export default class RestServer {

    private server: restify.Server;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.server = this.init(restify.createServer());
    }

    private init(server: restify.Server): restify.Server {
        server.use(restify.queryParser());
        server.use(restify.bodyParser());
        server.use(restify.gzipResponse());
        server.use(restify.fullResponse());
        server.use(restify.acceptParser(server.acceptable));
        server.use(restify.dateParser());

        registerRoutes(server, new GameController());

        return server;

        //return this.createRoutes(server);
    }

    // private createRoutes(server: restify.Server): restify.Server {
    //     const GET_PATH: string = '/api/game';
    //     server.get(GET_PATH, (req: restify.Request, res: restify.Response, next: restify.Next) => {
    //             console.log('Pre GET /, maybe authorize...')
    //             return next();
    //         }, (req: restify.Request, res: restify.Response, next: restify.Next) => {
    //             res.send({request: 'GET /'});
    //             return next();
    //         });
    //
    //     const GET_PARAM_PATH: string = '/api/game/:pathvar';
    //     server.get(GET_PARAM_PATH, (req: restify.Request, res: restify.Response, next: restify.Next) => {
    //         res.send({request: `GET / ${req.params.pathvar}`});
    //         return next();
    //     });
    //
    //     const POST_PATH: string = '/api/game';
    //     server.post(POST_PATH, (req: restify.Request, res: restify.Response, next: restify.Next) => {
    //         return next(new restify.MethodNotAllowedError("POST not implemented yet"));
    //     });
    //
    //     const PUT_PATH: string = '/api/game';
    //     server.put(PUT_PATH, (req: restify.Request, res: restify.Response, next: restify.Next) => {
    //         return next(new restify.MethodNotAllowedError("PUT not implemented yet"));
    //     });
    //     return server;
    // }

    public start(): void {
        this.server.listen(this.port, () => console.log(`Server is up and running on port: ${this.port} and url: ${this.server.url}`));
    }

    public toString = (): string => {
        return `RestServer (port: ${this.port}, url: ${this.server.url})`;
    }
}