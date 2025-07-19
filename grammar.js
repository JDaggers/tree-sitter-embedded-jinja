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
    source_file: $ => repeat(choice(
      $.content, // not jinja
      $.jinja_statement,
      $.jinja_expression,
      $.jinja_comment,
    )),
    jinja_statement: _ => seq(
      "{%",
      repeat(choice(/[^%]+/, /%[^}]/)), // any series of characters that is not '%}'
      "%}",
    ),
    jinja_expression: _ => seq( // TODO: perhaps modify definition to only accept 'expressions' not series of characters
      "{{",
      repeat(choice(/[^}]+/, /[}][^}]/)), // any series of characters that is not '}}'
      "}}",
    ),
    jinja_comment: _ => seq(
      "{#",
      repeat(choice(/[^#]+/, /#[^}]/)), // any series of characters that is not '#}'
      "#}"
    ),
    // presumably html but could be any language
    // matches any series of charaters that arent "{%", "{#" or {{"
    content: _ => prec.right(repeat1(choice(new RegExp("[^{]"), new RegExp("[{][^#%{]")))),
    // _identifier: _ => /[_\p{XID_Start}][_\p{XID_Continue}]*/,

  }
});
