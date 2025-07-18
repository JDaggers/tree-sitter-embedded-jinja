/**
 * @file Embedded Jinja 2 templating parser.
 * @author James Dagnall <james.t.dagnall@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "jinja2",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
