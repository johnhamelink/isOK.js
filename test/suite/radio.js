$(document).ready(function(){
    QUnit.module("Radio Buttons", {
        setup: function(){
            tests = {
                email: function (val) {
                    return /(?:\w+\.?)*[\-|\w|\+]+@(?:[\w|\-|\+]+\.)+\w+$/.test(val);
                },

                phoneNumber: function (val) {
                    return /^[0-9+\(\)#\.\s\/ext-]+$/.test(val);
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

    QUnit.test("test non-selected group of non-required radio buttons passes", function() {
        $('input[name="test20"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("test non-selected group of required radio buttons fails", function() {
        $('input[name="test21"]').isOK(rules, function (el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("test selected group of required radio buttons passes", function() {
        $('input[name="test22"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });
});
