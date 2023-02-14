import { Router } from "express";
import PokemonController from "../controllers/PokemonController.js";

const router = Router();

router.post("/pokemons", PokemonController.createPokemon);
router.get("/pokemons", PokemonController.showPokemons);
router.get("/pokemons/images/:name", PokemonController.showPokemonImageID);
router.put("/pokemons/:id", PokemonController.updateById);
router.delete("/pokemons/:id", PokemonController.deleteById);

export default router;
