# NotITG and OpenITG Typescript Definitions

Note: this is currently useless without a build script set up to transpile TypeScript code to Lua. I'll change the readme once I publish that.

## Install

Run:

`npm install notitg-typescript-definitions --save-dev`

then, in your tsconfig.json add:

```json
{
  "compilerOptions": {
    "types": {
      "notitg-typescript-definitions"
  	}
  }
}
```

## Suggested repos

Here are some suggested repos if you want to try out creating OpenITG/NotITG modfiles using TypeScript:

- none right now, will be updated soon