# fionawh.im blog theme



## Development Notes

**lib:** These are the files that Gatsby’s Node process will run. Transpiled
from TS into JS.

**src:** These are the Gatsby UI files. They can stay as TypeScript because we
require the `gatsby-plugin-typescript` plugin so that Gatsby’s Babel loading
will handle them.

### TypeScript

**tsconfig.json:** Includes all of our TS files so that they’ll be type-checked
in the editor.

**tsconfig.build.json:** Rules for building just the "lib" directory into
"build". These are the files that Node will need to have access to.