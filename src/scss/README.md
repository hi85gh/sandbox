# Sass

- Official site: <https://sass-lang.com/>
  - Style guide: <https://sass-lang.com/styleguide>
- Documentation: <https://sass-lang.com/documentation>

1.  Ruby Sass: No longer supported.
    - <https://sass-lang.com/ruby-sass>
2.  LibSass: Deprecated.
    - <https://sass-lang.com/libsass>
3.  Dart Sass: Recommend.
    - <https://sass-lang.com/dart-sass>

## Node.js wrapper

Reference: <https://sass-lang.com/blog/libsass-is-deprecated>

1.  dart-sass: Recommend.
2.  node-sass: Deprecated.

- Repository: <https://github.com/sass/dart-sass>
- Documentation: <https://sass-lang.com/dart-sass>
- Release notes: <https://github.com/SortableJS/Vue.Draggable/releases>
- Changelog: <https://github.com/sass/dart-sass/blob/master/CHANGELOG.md>

### Command Line

```sh
$ node_modules/.bin/sass --version
1.29.0 compiled with dart2js 2.10.3

$ node_modules/.bin/sass --help
Compile Sass to CSS.

Usage: sass <input.scss> [output.css]
       sass <input.scss>:<output.css> <input/>:<output/> <dir/>

━━━ Input and Output ━━━━━━━━━━━━━━━━━━━
    --[no-]stdin               Read the stylesheet from stdin.
    --[no-]indented            Use the indented syntax for input from stdin.
-I, --load-path=<PATH>         A path to use when resolving imports.
                               May be passed multiple times.
-s, --style=<NAME>             Output style.
                               [expanded (default), compressed]
    --[no-]charset             Emit a @charset or BOM for CSS with non-ASCII characters.
                               (defaults to on)
    --[no-]error-css           When an error occurs, emit a stylesheet describing it.
                               Defaults to true when compiling to a file.
    --update                   Only compile out-of-date stylesheets.

━━━ Source Maps ━━━━━━━━━━━━━━━━━━━━━━━━
    --[no-]source-map          Whether to generate source maps.
                               (defaults to on)
    --source-map-urls          How to link from source maps to source files.
                               [relative (default), absolute]
    --[no-]embed-sources       Embed source file contents in source maps.
    --[no-]embed-source-map    Embed source map contents in CSS.

━━━ Other ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    --watch                    Watch stylesheets and recompile when they change.
    --[no-]poll                Manually check for changes rather than using a native watcher.
                               Only valid with --watch.
    --[no-]stop-on-error       Don't compile more files once an error is encountered.
-i, --interactive              Run an interactive SassScript shell.
-c, --[no-]color               Whether to use terminal colors for messages.
    --[no-]unicode             Whether to use Unicode characters for messages.
-q, --[no-]quiet               Don't print warnings.
    --[no-]trace               Print full Dart stack traces for exceptions.
-h, --help                     Print this usage information.
    --version                  Print the version of Dart Sass.
```
