$(document).ready(function(){
    QUnit.module("Checkboxes", {
        setup: function(){
            QUnit.tests = {
                email: function (val) {
                    return /(?:\w+\.?)*[\-|\w|\+]+@(?:[\w|\-|\+]+\.)+\w+$/.QUnit.test(val);
                },

                phoneNumber: function (val) {
                    return /^[0-9+\(\)#\.\s\/ext-]+$/.QUnit.test(val);
                },

                minLength: function (val, length) {
                    return val.length >= length;
                },

                maxLength: function (val, length) {
                    return val.length <= length;
                },

                equal: function (val1, val2) {
                    return (val1 == val2);
                }
            };

            rules = {
            };

        }
    });

    QUnit.test("test non-selected group of non-required checkboxes passes", function() {
        $('input[name="test17"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("test non-selected group of required checkboxes fails", function() {
        $('input[name="test18"]').isOK(rules, function (el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("test selected group of required checkboxes passes", function() {
        $('input[name="test19"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });
});
