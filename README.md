#isOK.js

A tiny, simplistic validation plugin for jQuery, inspired by happy.js

[![Build Status](https://travis-ci.org/johnhamelink/isOK.js.png?branch=master)](https://travis-ci.org/johnhamelink/isOK.js)

##Perks:

 - Build your own validation with custom validation callbacks
 - Failure *and* success callbacks allow you to customise your
   form response easily.
 - Rules are in exactly the same structure as happy.js
 - Uses html5 `required` to define whether something is required or not.
 - Now handles checkboxes, radios, and selects.

##Usage:

    var validation = {
        email: function (val) {
            return /(?:\w+\.?)*[\-|\w|\+]+@(?:[\w|\-|\+]+\.)+\w+$/.test(val);
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

    var rules = {

        'name' : {
            message: 'Please enter your name'
        },
        'email' : {
            message: 'Please enter a valid email address',
            test: validation.email // Test that it's a valid email address
        },
        'telephonenumber' : {
            message: 'Please enter a valid telephone number'
        },
        'subject' : {
            message: 'Please enter a Subject'
        },
        'message' : {
            message: 'Please enter a message'
        },
        'location' : {
            message: 'Please enter your Location'
        }
    };


    $('form input, form textarea').blur(function(){
        $(this).isOK(rules, function(el){
            // Success
            el.parent().css('border', '2px solid green');
        }, function(el, msg){
            // Fail
            el.parent().css('border', '2px solid red')
                .append("<span class='error'>"+msg+"</span>");
        });
    });
