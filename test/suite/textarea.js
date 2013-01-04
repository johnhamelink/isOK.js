$(document).ready(function(){
    QUnit.module("Text Areas", {
        setup: function(){
            tests = {
                email: function (val) {
                    return /(?:\w+\.?)*[\-|\w|\+]+@(?:[\w|\-|\+]+\.)+\w+$/.test(val);
                },

                phoneNumber: function (val) {
                    return /^[0-9+\(\)#\.\s\/ext-]+$/.test(val);
                },

                minLength: function (val, el) {
                    return el.length >= 32;
                },

                maxLength: function (val, el) {
                    return el.length <= 32;
                }

            };

            rules = {
                "test15" : { message: "Error", test: tests.email }
            };

        }
    });

    QUnit.test("QUnit.test empty non-required textarea passes", function() {
        $('textarea[name=test12]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("QUnit.test empty required textarea fails", function() {
        $('textarea[name=test13]').isOK(rules, function(el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("QUnit.test non-empty required textarea passes", function() {
        $('textarea[name=test14]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("QUnit.test invalid required textarea with custom validation fails", function() {
        $('textarea[name=test15]').isOK(rules, function(el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("QUnit.test valid required textarea with custom validation passes", function() {
        $('textarea[name=test16]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });
});
