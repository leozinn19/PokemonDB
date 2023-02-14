import bodyParser from 'body-parser';
import pokemon from './pokemonRoutes.js';

export default (app) => {
    app
        .use(bodyParser.json())
        .use(pokemon)
}