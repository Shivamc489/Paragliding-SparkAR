/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require("Scene");
const Patch = require("Patches");

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require("Diagnostics");

// var textObject = Scene.root
//   .child("Device")
//   .child("Camera")
//   .child("Focal Distance")
//   .child("faceTracker0")
//   .child("GameOverCanvas")
//   .child("rectangle0")
//   .findAll("feedback");

var countNumber = Scene.root.find('Score');
var feedback = Scene.root.find('feedback');
var scoreNumber = Patch.getScalarValue('playerScore');
countNumber.text = scoreNumber.toString();
var feedbackText = "";
switch(scoreNumber.lastValue)
{
    case 0:
        feedbackText = "Better Luck, next time!"
        break;
    case 1:
        feedbackText = "You can do better!"
        break;
    case 2:
        feedbackText = "You can do this...!"
        break;
    case 3:
        feedbackText = "Perfect!"
        break;
    default:
        feedbackText = "Error!"
        Diagnostics.log("Error occured, switch at default value = "+scoreNumber.lastValue);
}
feedback.text = feedbackText;

// Diagnostics.log('Console message logged from the script.');
