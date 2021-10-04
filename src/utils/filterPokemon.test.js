import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    expect(Array.isArray(filterPokemon(mockPokemonsData))).toBe(true);
  });

  test("it should return an empty array", () => {
    expect(filterPokemon(mockPokemonsData)).toEqual([]);
  });

  test("it should return an array with charizard object", () => {
    expect(filterPokemon(mockPokemonsData, "charizard")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "charizard"
        })
      ])
    );
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    expect(Array.isArray(filterPokemon())).toBe(false);
  });

  test("it should validate the 'name' argument", () => {
    expect(filterPokemon("charizard").toBeCalledWith(expect(String))
  });
});
