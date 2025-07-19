; highlights.scm

; blocks
(jinja_comment) @comment
(jinja_expression) @variable
(jinja_statement) @keyword

[
	"{{"
	"}}"
	"{%"
	"%}"
] @punctuation

;[ 
;    "+"
;	"-"
;	"/"
;	"//"
;	"%"
;	"*"
;	"**"
;	"=="
;	"!="
;	">"
;	">="
;	"<"
;	"<="
;	"|"
;	"~"
;	"."
;	"is"
;	"in"
;	"and"
;	"not"
;	"or"
;] @operator
;[ 
;	"if"
;	"else"
;	"elif"
;	"for"
;	"endfor"
;	"block"
;	"enblock"
;	"extends"
;	"scoped"
;	"macro"
;	"endmacro"
;	"filter"
;	"endfilter"
;	"call"
;	"endcall"
;	"set"
;	"endset"
;	"include"
;	"ignore"
;	"missing"
;	"import"
;	"from"
;	"as"
;] @keyword
