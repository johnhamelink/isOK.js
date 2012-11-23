/**
 * isOK.js
 *
 * This jQuery plugin provides super-simple validation, and a
 * callback to handle the success or failure of the validation.
 *
 * This jQuery plugin is designed for use with an AMD-compatible
 * JS loader such as requireJS.
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

define('isOK', ['jquery'], function($) {

    isOK = (function($){
        $.fn.isOK = function (config, success, fail) {

            function findInRules(config, key) {
                var response = null;
                $.each(config, function(index, value){
                    if (key === index) {
                        response = value;
                    }
                });

                return response;
            }

            function runCustomTest(test, el) {
                if (test(el.val())) {
                    return true;
                } else {
                    return false;
                }
            }

            function validate(rule, el) {
                if (rule.test) {
                    return runCustomTest(rule.test, el);
                } else {
                    if (el.attr('required') && el.val().length === 0 ) {
                        return false;
                    }
                }
                return true;
            }

            var el = $(this);
            var rule = findInRules(config, el.attr('name'));
            var result = validate(rule, el);

            if (result) {
                success(el);
            } else {
                fail(el, rule.message);
            }

        };
    })(this.jQuery || this.Zepto);

    return isOK;

});
