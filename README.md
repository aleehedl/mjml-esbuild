Run the following

```
  npm run build
```


And see it fail in the following fashion:

```

> build
> node build.cjs

▲ [WARNING] "../lib/utils.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:4:20:
      4 │     require.resolve("../lib/utils.js"),
        ╵                     ~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/ast.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:5:20:
      5 │     require.resolve("../lib/ast.js"),
        ╵                     ~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/transform.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:6:20:
      6 │     require.resolve("../lib/transform.js"),
        ╵                     ~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/parse.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:7:20:
      7 │     require.resolve("../lib/parse.js"),
        ╵                     ~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/scope.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:8:20:
      8 │     require.resolve("../lib/scope.js"),
        ╵                     ~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/compress.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:9:20:
      9 │     require.resolve("../lib/compress.js"),
        ╵                     ~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/output.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:10:20:
      10 │     require.resolve("../lib/output.js"),
         ╵                     ~~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/sourcemap.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:11:20:
      11 │     require.resolve("../lib/sourcemap.js"),
         ╵                     ~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/mozilla-ast.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:12:20:
      12 │     require.resolve("../lib/mozilla-ast.js"),
         ╵                     ~~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/propmangle.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:13:20:
      13 │     require.resolve("../lib/propmangle.js"),
         ╵                     ~~~~~~~~~~~~~~~~~~~~~~

▲ [WARNING] "../lib/minify.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:14:20:
      14 │     require.resolve("../lib/minify.js"),
         ╵                     ~~~~~~~~~~~~~~~~~~

▲ [WARNING] "./exports.js" should be marked as external for use with "require.resolve" [require-resolve-not-external]

    node_modules/uglify-js/tools/node.js:15:20:
      15 │     require.resolve("./exports.js"),
         ╵                     ~~~~~~~~~~~~~~

{
  errors: [],
  warnings: [
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/utils.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/ast.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/transform.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/parse.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/scope.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/compress.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/output.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/sourcemap.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/mozilla-ast.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/propmangle.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"../lib/minify.js" should be marked as external for use with "require.resolve"'
    },
    {
      detail: undefined,
      id: 'require-resolve-not-external',
      location: [Object],
      notes: [],
      pluginName: '',
      text: '"./exports.js" should be marked as external for use with "require.resolve"'
    }
  ]
}
```
