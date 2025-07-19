A very rough tree-sitter grammar for embedded jinja.

Just injects the tree-sitter-python grammar inside the jinja blocks.
Injects the tree-sitter-html grammar everywhere else. I dont know how you would make an injection to language detection.


To get neovim to load this grammar follow the instructions [here](https://github.com/nvim-treesitter/nvim-treesitter/tree/main?tab=readme-ov-file#adding-custom-languages)
in the nvim-treesitter repo.

