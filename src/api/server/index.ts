import * as fs from 'fs';
import * as restify from 'restify';

class RestServer {

    private server : restify.Server;
    private port : number;

    constructor(port : number) {
        this.server = restify.createServer();
        this.port = port;
    }

    public toString = () : string => {
        return `RestServer (port: ${this.port})`;
    }
}