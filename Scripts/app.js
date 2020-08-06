/*
File name: app.js
Author's name: Tamanna Yasmin Jitu
Web site name: My Home Page
Web site URL: https://tyjitu.github.io/COMP125-A3/
File description: This file is used for javascript validation
*/

"use strict";

// IIFE -Immediately Ivoked Function Expression
(function () {

    let title = document.title.toLowerCase();

    function highlightActiveLink(id) 
    {
        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {
         anchor.className = "nav-link";
        }

        for (const anchor of navAnchors) 
        {
            let anchorString = anchor.getAttribute("id");

            if (id === anchorString)
            {
                anchor.className = "nav-link active";
            }
        }
    }

    // function highlightActiveLink_OLD() {
    //     //console.log(`The title of the page is ${title}`);

    //     let navAnchors = document.querySelectorAll("li a");

    //     for (const anchor of navAnchors) {

    //         let anchorString = anchor.getAttribute("href");
    //         anchorString = anchorString.substr(0, anchorString.length - 5);

    //         if ((title === "home") && (anchorString === "index") || (title === anchorString)) {
    //             anchor.className = "nav-link active";
    //         }
    //     }

    //     return title;
    // }

    function loadHomeContent() {
        console.info("Homepage Loading...");
        highlightActiveLink();

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 3 - Executes the request
        XHR.send();

        // step 4 - register the readystate event 
        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let dataFile = JSON.parse(XHR.responseText);
                let allContents = dataFile.paragraphContent;

                let jumbotron = document.getElementsByClassName("jumbotron")[0];
                let firstDiv = document.createElement("div");
                firstDiv.innerHTML = allContents[0].content;
                jumbotron.appendChild(firstDiv);

            }
        });
    }

    function loadProjectContent() {
        console.info("Homepage Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 3 - Executes the request
        XHR.send();

        // step 4 - register the readystate event 
        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let dataFile = JSON.parse(XHR.responseText);
                let allContents = dataFile.paragraphContent;

                let jumbotron = document.getElementsByClassName("jumbotron")[0];
                let firstDiv = document.createElement("div");
                firstDiv.innerHTML = allContents[1].content;
                jumbotron.appendChild(firstDiv);

            }
        });
    }

    function loadHeader() {
        console.info("Home Content Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Scripts/Views/partials/header.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let header = document.getElementsByTagName("header")[0];

                let headerData = XHR.responseText;

                header.innerHTML = headerData;
            }
        });
    }

    function loadFooter() {
        console.info("Home Content Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Scripts/Views/partials/footer.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let header = document.getElementsByTagName("footer")[0];

                let headerData = XHR.responseText;

                header.innerHTML = headerData;
            }
        });
    }


    function InitializeSite() {

        loadHeader();        
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
        loadFooter();

    }




    // named function
    function Start() {
        InitializeSite();
    }

    window.addEventListener("load", Start);
})();