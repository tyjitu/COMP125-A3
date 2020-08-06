"use strict";

// IIFE -Immediately Ivoked Function Expression
(function () {

    function highlightActiveLink(id) {
        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) {
            anchor.className = "nav-link";
        }

        for (const anchor of navAnchors) {
            let anchorString = anchor.getAttribute("id");

            if (id === anchorString) {
                anchor.className = "nav-link active";
            }
        }
    }


    function setPageContent(id) {
        console.log("This is: " + id);
        document.title = id;

        window.history.pushState("", id, "/" + id.toLowerCase());

        highlightActiveLink(id);
        console.log("Inside setPageContent");
        // content switcher
        switch (id) {
            case "Home":
                HomeContent();
                break;
            case "Projects":
                ProjectContent();
                break;
                case "Contact":
                    ContactContent();
                    break;
                default:
                break;
        }

        loadFooter();
    }

    function ContactContent()
    {
        console.info("Contact Content Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "contact.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function(){
            if((XHR.readyState === 4) && (XHR.status === 200))
            {
                let main = document.getElementsByTagName("main")[0];
                let mainData = XHR.responseText;
                main.innerHTML = mainData;
            }
        });
    }

    function InitializeSite() {
        console.info("Header Loading...");

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
                setPageContent("Home");

                let navLinks = document.getElementsByTagName("a");

                for (const link of navLinks) {
                    link.addEventListener("click", (event) => {
                        event.preventDefault();
                        let id = link.getAttribute("id");
                        setPageContent(id);

                    });
                }
            }
        });
    }

    function loadFooter() {
        console.info("Footer Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message
        XHR.open("GET", "./Scripts/Views/partials/footer.html");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let footer = document.getElementsByTagName("footer")[0];
                let footerData = XHR.responseText;
                footer.innerHTML = footerData;
            }
        });
    }


    function HomeContent() {
        console.info("Home Content Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message        
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let dataFile = JSON.parse(XHR.responseText);
                let allContents = dataFile.paragraphContent;

                let jumbotron = document.getElementsByClassName("jumbotron")[0];
                jumbotron.innerHTML = allContents[0].content;
            }
        });
    }


    function ProjectContent() {
        console.info("Project Content Loading...");

        // step 1 - creates the XHR object
        let XHR = new XMLHttpRequest();

        // step 2 - configures the message        
        XHR.open("GET", "./Scripts/paragraphs.json");

        // step 3 - Executes the request
        XHR.send();

        XHR.addEventListener("readystatechange", function () {
            if ((XHR.readyState === 4) && (XHR.status === 200)) {
                let dataFile = JSON.parse(XHR.responseText);
                let allContents = dataFile.paragraphContent;

                let jumbotron = document.getElementsByClassName("jumbotron")[0];
                jumbotron.innerHTML = allContents[1].content;
            }
        });
    }


    // named function
    function Start() {
        console.log('%cApp Started...', "color:white; font-size: 24px;");

        InitializeSite();
    }


    window.addEventListener("load", Start);

})();



