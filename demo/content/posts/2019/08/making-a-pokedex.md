---
title: Making a Pokédex
date: 2019-08-20
project: pybadge-pokedex
tags: ["CircuitPython", "Pokémon"]
---

I’m working on a project for my kid using Adafruit’s
[PyBadge](https://www.adafruit.com/product/4200): a Pokédex!

#### displayio Lessons

- Preloading glyphs with `load_glyphs` is very important. Otherwise the glyphs
  are loaded 1-by-1 as they’re used in labels, which causes lots of accesses.
  Doing it all at once allows the library to optimize the loading.
- `TileGrid` only goes up to 256 tiles because it takes a `uint8` as the tile
  argument.
- Actually there may be a bug where `TileGrid` doesn’t work if it even thinks you
  have 256 tiles, due to how it tries to pack them in the pointer.
- Loading images things off QSPI isn’t actually all that slow.
