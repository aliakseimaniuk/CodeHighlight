(function () {
    var themes =
        {
            default: "code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#a67f59;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function{color:#DD4A68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}",
            prismVs: "code[class*=language-],pre[class*=language-]{color:#393A34;font-family:Consolas,'Bitstream Vera Sans Mono','Courier New',Courier,monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;font-size:.95em;line-height:1.2em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{background:#00f}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{background:#00f}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;background-color:#F5F9FA}:not(pre)>code[class*=language-]{padding:1px .2em;background:#f8f8f8;border:1px solid #ddd}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:green;font-style:italic}.token.namespace{opacity:.7}.token.string{color:#A31515}.token.operator,.token.punctuation{color:#393A34}.token.boolean,.token.constant,.token.inserted,.token.number,.token.symbol,.token.url,.token.variable{color:#36acaa}.language-autohotkey .token.selector,.token.atrule,.token.attr-value,.token.keyword,code[class*=language-css]{color:#00f}.token.function{color:#393A34}.language-autohotkey .token.tag,.token.deleted{color:#9a050f}.language-autohotkey .token.keyword,.token.selector{color:#00009f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.class-name{color:#2B91AF}.token.selector,.token.tag{color:maroon}.token.attr-name,.token.entity,.token.property,.token.regex{color:red}.token.directive.tag .tag{background:#ff0;color:#393A34}",
            prismOkaidia: "code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:0 0;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#f8f8f2}.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}"
        };

    $(document).ready(function () {
        $('#transformButton').click(function () {
            var code = $('#sourceCode').val();
            var language = $('.prism-language').val();
            var theme = $('.prism-theme').val();
            var html = Prism.highlight(code, Prism.languages[language]);
            var style = '<style>' + themes[theme] + '</style>';
            var result = '';

            if ($('#includeStyleCheckbox').is(':checked')) {
                result =
                    '<!-- Generated code by prismjs -->' +
                    style +
                    '<pre class="language-javascript">' +
                    html +
                    '</pre><!-- Generated code by prismjs -->';

                $('.result-preview').html(result);
            } else {
                result =
                    '<!-- Generated code by prismjs --><pre class="language-javascript">' +
                    html +
                    '</pre><!-- Generated code by prismjs -->';

                $('.result-preview').html('');
            }

            $('#highlightedCode').val(result);
        });
    });
})();
