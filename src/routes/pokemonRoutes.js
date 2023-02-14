import { Router } from "express";
import PokemonController from "../controllers/PokemonController.js";

const router = Router();

router.get("/pokemons", PokemonController.showPokemons);
router.post("/pokemons", PokemonController.createPokemon);
router.get("/pokemons/images/:id", PokemonController.showPokemonImageID);

export default router;
