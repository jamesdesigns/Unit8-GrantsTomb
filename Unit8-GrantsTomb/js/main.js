// JavaScript Document
/*  jslint browser:true */
"use strict";

var question1 = {
    question: "Who is buried in Grants Tomb?",
    answer1: "Tom",
    answer2: "Grant",
    answer3: "Sally",
    answer4: "Jordan",
    correct:2,

    displayContent: function() {
        var question = "Who is buried in Grants Tomb?";
        var answer1 = "Tom";
        var answer2 = "Grant";
        var answer3 = "Sally";
        var answer4 = "Jordan";
        
        document.getElementById('question').innerHTML = question;
        document.getElementById('Tom').innerHTML = answer1;
        document.getElementById('Grant').innerHTML = answer2;
        document.getElementById('Sally').innerHTML = answer3;
        document.getElementById('Jordan').innerHTML = answer4;
    },

    check: function(x) {
        if(x==question1.correct) {
            document.getElementById('message').innerHTML = "Your Correct!"
        } else {
            document.getElementById('message').innerHTML = "Try again."
        }

    }

}




