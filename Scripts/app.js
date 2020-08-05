/*
File name: app.js
Author's name: Tamanna Yasmin Jitu
Web site name: My Home Page
Web site URL: https://tyjitu.github.io/COMP125-A2/
File description: This file is used for javascript validation
*/

"use strict";

// IIFE -Immediately Ivoked Function Expression
(function(){
    
    let title = document.title.toLowerCase();

    function highlightActiveLink() 
    {
        //console.log(`The title of the page is ${title}`);

        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);

            if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
            {
                anchor.className = "nav-link active";
            }
        }

        return title;
    }

function loadHomeContent()
    {
        console.info("Homepage Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 3 - Executes the request
        XHR.send();

        // step 4 - register the readystate event 
        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let dataFile = JSON.parse(XHR.responseText);
                let allContents = dataFile.paragraphContent;
                
                let jumbotron = document.getElementsByClassName("jumbotron")[0];
                let firstDiv = document.createElement("div");
                firstDiv.innerHTML = allContents[0].content;
                jumbotron.appendChild(firstDiv);
               
            }
        });
    }

    function loadProjectContent()
    {
        console.info("Homepage Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 3 - Executes the request
        XHR.send();

        // step 4 - register the readystate event 
        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let dataFile = JSON.parse(XHR.responseText);
                let allContents = dataFile.paragraphContent;
                
                let jumbotron = document.getElementsByClassName("jumbotron")[0];
                let firstDiv = document.createElement("div");
                firstDiv.innerHTML = allContents[1].content;
                jumbotron.appendChild(firstDiv);
               
            }
        });
    }


    function addParagraphsToJumbotron() 
    {
        // step 1 hook into the spot (element) on the page
        let jumbotron = document.getElementsByClassName("jumbotron")[0];

        if (jumbotron) 
        {
            // step 2 create a new element
            let firstDiv = document.createElement("div");
            let firstParagraph = document.createElement("p");
            let secondParagraph = document.createElement("p");
            let thirdParagraph = document.createElement("p");
            let fourthParagraph = document.createElement("p");

            // step 3 configure the new element
            
            switch (title) {
                case "home":
                    loadHomeContent();
                    break;
                case "projects":
                    loadProjectContent();
                    break;
                default:
                    break;
            }           
            
            // step 4 attach the new element
            jumbotron.appendChild(firstDiv);

            // back to step 2 - create a new element
            let newDiv = document.createElement("div");

            // step 3 - configure    

            // step 4 attach the new element
            jumbotron.appendChild(newDiv);


            return true;

        }

        return false;
    }

    


    // named function
    function Start()
    {
       console.log('%cApp Started...', "color:white; font-size: 24px;");   

       let title = highlightActiveLink();

       let success = addParagraphsToJumbotron();

       if(success) 
       {
        console.log("successfully added paragraphs to jumbotron");
       }
       else
       {
        console.warn("content not added to jumbotron - does not exist");
       }

    } 

    window.addEventListener("load", Start);
})();




