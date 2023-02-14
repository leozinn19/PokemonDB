import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

class PokemonController {
  static async createPokemon(req, res) {
    const pokemon = await prisma.pokemon.create({
      data: req.body,
    });
    res.json(pokemon);
  }

  static async showPokemons(req, res) {
    const allPokemons = await prisma.pokemon.findMany();
    res.json(allPokemons);
  }

  static async showPokemonImageID(req, res) {
    const name = req.params;
    const pokemon = await prisma.pokemon.findUnique({ where: name });
    if (!pokemon) {
      res.status(404).send("Pokemon not Found");
      return;
    }
    function pad(num) {
      num = num.toString();
      while (num.length < 3) num = "0" + num;
      return num;
    }
    let numeroFormatado = pad(pokemon.id);
    try {
      const imagem = await fs.promises.readFile(
        `C:/Users/leona/Desktop/Pokedex Angular/Pokemons_DB/assets/images/pokemons/${pokemon.name}.png`
      );
      res.setHeader("Content-Type", "image/png");
      res.send(imagem);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to read image data");
    }
  }

  static async updateById(req, res) {
    const id = +req.params.id;
    const pokemon = await prisma.pokemon.findUnique({ where: { id } });
    if (!pokemon) {
      res.status(404).send("Pokemon not Found");
      return;
    }
    const nome = pokemon.name;
    try {
      await prisma.pokemon.updateMany({
        where: { id },
        data: req.body,
      });
      res.status(200).json(`${nome} updated to ${req.body.name}`);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to update pokemon");
    }
  }

  static async deleteById(req, res) {
    const id = +req.params.id;
    const pokemon = await prisma.pokemon.findUnique({ where: { id } });
    if (!pokemon) {
      res.status(404).send("Pokemon not Found");
      return;
    }
    const nome = pokemon.name;
    try {
      await prisma.pokemon.delete({
        where: { id },
      });
      res.status(200).json(`${nome} deleted`);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to delete pokemon");
    }
  }
}

export default PokemonController;
