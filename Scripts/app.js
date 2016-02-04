"use strick";

// setup your IIFE(Immediately Invoked Function Expression)
(function () {

      console.log("App Started...");
      
      //declared a named function way
/*
      function replaceFirstParagraph() {
            console.log("inside replaceFirstParagraph function");
            var firstParagraph;

            firstParagraph = document.getElementById("firstParagraph");

            firstParagraph.innerHTML = "My New Paragraph Data";
      }
*/
      // Declasre an anonymous funtion with named alias *NO NO*
      var replaceFirstParagraph = function() {
            console.log("inside replaceFirstParagraph anonymous funtion");
            var firstParagraph;
            
            firstParagraph = Document.getElementById("firstParagraph");
            
            firstParagraph.innerHTML = "My New paragraph data";
      };
      
      //call the replace first paragraph function
      replaceFirstParagraph();


})();