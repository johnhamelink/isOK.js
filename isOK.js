/**
 * isOK.js
 *
 * This jQuery plugin provides super-simple validation, and a
 * callback to handle the success or failure of the validation.
 *
 * @author John Hamelink <john@johnhamelink.com>
 * @package isOK
 * @copyright 2012 John Hamelink
 *
 * Copyright (C) 2012 John Hamelink
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

(function($){
    $.fn.isOK = function (config, success, fail) {

        function findInRules(config, key) {
            var response = null;
            // Find the rule that matches this element.
            $.each(config, function(index, value){
                if (key === index) {
                    response = value;
                }
            });

            return response;
        }

        function runCustomTest(test, el) {
            if (test(el.val(), el)) {
                return true;
            } else {
                return false;
            }
        }

        function validate(rule, el) {
            // If there are no rules or custom test defined,
            // then don't run the custom test
            if (rule !== null && rule.test) {
                return runCustomTest(rule.test, el);
            // If there's no custom test, check to see if the element is
            // marked as "required".
            } else if (el.attr('required')) {
                // If the element is a checkbox or radio button, check it against
                // its siblings in order to get a correct result (right now we're
                // just testing one element, not all of them collectively, so we
                // need to factor them in).
                if (el.attr('type') == "checkbox" || el.attr('type') == "radio") {
                    if (el.siblings("[name="+el.attr('name')+"]:checked").length){
                        return true;
                    } else {
                        return false;
                    }
                // Just a generic test
                } else if (
                    el.val() == null ||
                    el.val() == "" ||
                    el.val() == [] ||
                    el.val().length === 0
                ) {
                    return false;
                }
            }
            return true;
        }

        var el     = $(this);
        var rule   = findInRules(config, el.attr('name'));
        var result = validate(rule, el);

        if (result) {
            success(el);
        } else {
            if (rule !== null) {
                fail(el, rule.message);
            } else {
                fail(el, "");
            }
        }

    };
})(this.jQuery || this.Zepto);
