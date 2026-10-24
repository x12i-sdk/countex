# @x12i/countex-docs usage example

Countex documentation knowledge SDK and Docify site bundle for developers and operators.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `1.1.2`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/countex-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled countex documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/countex-docs)
- [Implementation monorepo](https://github.com/x12i/countex-mono-repo)
- [Reviewed package source](https://github.com/x12i/countex-mono-repo/tree/6fce5005bf2fc616716315b6f227db792c3a56f1/packages/countex-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## @x12i/countex runtime example

Generic sparse counter matrices for JSON events. Dynamic counting, aggregation, and retrieval from mapped JSON inputs.

Count local JSON events with an application-owned counter map. This example consumes `@x12i/countex@1.8.5`.

```sh
npm install --ignore-scripts
npm run example:countex
```

Source: [`src/countex-example.mjs`](src/countex-example.mjs). The original documentation-package example remains available through `npm start`. Both examples are checked independently.

## Runtime example scope

The runtime consumer uses local synthetic data. It does not invoke a model, connect to MongoDB, or publish a package. Any temporary workspace is created and removed by the example. Documentation and runtime examples have separate commands and are validated separately.
