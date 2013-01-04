$(document).ready(function() {
    QUnit.module("Text Inputs", {
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
                "test6" : { message: "Error", test: tests.email },
                "test10" : { message: "Error", test: tests.phoneNumber },
            };
        }
    });

    QUnit.test("Test empty non-required text field passes", function() {
        $('input[name=test1]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false. Message: " + msg);
        });
    });

    QUnit.test("Test empty required text field fails", function() {
        $('input[name=test2]').isOK(rules, function(el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("Test non-empty required text field passes", function() {
        $('input[name=test3]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false. Message: + " + msg);
        });
    });

    QUnit.test("Test empty non-required email field passes", function() {
        $('input[name=test4]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false. Message: + " + msg);
        });
    });

    QUnit.test("Test empty required email field fails", function() {
        $('input[name=test5]').isOK(rules, function(el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("Test invalid data in required email field fails", function() {
        $('input[name=test6]').isOK(rules, function(el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("Test valid data in required email field passes", function() {
        $('input[name=test7]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("Test empty non-required tel field passes", function() {
        $('input[name=test8]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("Test empty required tel field fails", function() {
        $('input[name=test9]').isOK(rules, function(el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("Test invalid required tel field fails", function() {
        $('input[name=test10]').isOK(rules, function(el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("Test valid required tel field passes", function() {
        $('input[name=test11]').isOK(rules, function(el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

});
