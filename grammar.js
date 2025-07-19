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
    // any series of characters that is not '%}'
    jinja_statement_code: _ => repeat1(choice(/[^%]+/, /%[^}]/)), 
    jinja_statement: $ => seq(
      "{%",
      optional($.jinja_statement_code),
      "%}",
    ),
    // any series of characters that is not '}}'
    jinja_expression_code: _ => repeat1(choice(/[^}]+/, /[}][^}]/)), 
    jinja_expression: $ => seq( 
      "{{",
      optional($.jinja_expression_code),
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
