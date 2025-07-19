((content) @injection.content
    (#set! injection.language "html")
    (#set! injection.combined))

((jinja_statement_code) @injection.content
    (#set! injection.language "python")
    (#set! injection.combined))

((jinja_expression_code) @injection.content
    (#set! injection.language "python")
    (#set! injection.combined))
