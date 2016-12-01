import * as fs from 'fs';
import * as restify from 'restify';

export class RestServer {

    private server : restify.Server;
    private port : number;

    constructor(port : number) {
        this.server = restify.createServer();
        this.port = port;
        this.server.listen(this.port, () => console.log(`Server is up and running on port: ${this.port}`));
    }

    public toString = () : string => {
        return `RestServer (port: ${this.port})`;
    }
}