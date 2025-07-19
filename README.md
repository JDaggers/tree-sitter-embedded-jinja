A very rough tree-sitter grammar for embedded jinja.

Just injects the tree-sitter-python grammar inside the jinja blocks.
Injects the tree-sitter-html grammar everywhere else. I dont know how you would make an injection to language detection.


To get neovim to load this parser you might put something like the following in your tree-sitter config:

```lua
local parser_config = require("nvim-treesitter.parsers").get_parser_configs()
parser_config.jinja2 = {
    install_info = {
        url = "https://github.com/JDaggers/tree-sitter-embedded-jinja.git",
        files = { "src/parser.c" },
        branch = "main",
        generate_requires_npm = false,
        requires_generate_from_grammar = true,
    },
    filetype = "j2",
}
```
