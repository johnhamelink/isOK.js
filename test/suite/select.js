$(document).ready(function(){
    QUnit.module("Select/Option", {
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

            $('select[name="test24"]').val([]);
        }
    });

    QUnit.test("test non-selected non-required select passes", function() {
        $('select[name="test23"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("test non-selected required select fails", function() {
        $('select[name="test24"]').isOK(rules, function (el) {
            ok(false, "Validation returns true.");
        }, function(el, msg) {
            ok(true, "Validation returns false.");
        });
    });

    QUnit.test("test selected required select passes", function() {
        $('select[name="test25"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("test single-selected required multiple select passes", function() {
        $('select[name="test26"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });

    QUnit.test("test multiple-selected required multiple select passes", function() {
        $('select[name="test27"]').isOK(rules, function (el) {
            ok(true, "Validation returns true.");
        }, function(el, msg) {
            ok(false, "Validation returns false.");
        });
    });
});
