# IOXIO Docs

Documentation for various IOXIO projects. Hosted at https://docs.ioxio.dev

## Editing / developing

You will need

- Node 18.x or 20.x
- PNPM 8.x

```shell
pre-commit install
```

```shell
pnpm run dev
```

Make sure you test `build` as well, as not all things work in SvelteKit static generator.

```shell
pnpm run build
```

And you can test it e.g. with

```shell
cd build
python -m http.server
```
