export default class GameController {

    constructor() {
    }

    getGames() {
        return 'GET GAMES';
    }

    getGamesById(id : number) {
        return `GET GAMES BY ID: ${id}`;
    }
}