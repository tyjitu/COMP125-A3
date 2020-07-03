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
                    firstDiv.innerHTML =
                `                
                <p>
                    My name is Tamanna Yasmin Jitu. You can call me Tamanna.I am a student in the Software Engineering Technology Program at Centennial College.
                </p>
                <p>
                    I like to reach on my dream goal where I can enjoy my Job and have more and more options to show my creativity. 
                    My only and one perception now to build up my skills in this sector. 
                </p>
                <p>
                    One of my favorite quotes is:
                    <br>"Logic will get you from A to Z; imagination will take you everywhere."
                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~~Albert Einstein~~~
                </p>
                <p align="right">
                    <img width="230" src="./Assets/images/me.png">
                </p>
                `;
                    break;
                case "projects":
                    firstDiv.innerHTML =
                    `                
                    <p>
                        In my first semester of Software Eng. Technology, I worked with couple of projects using TextPad and MS Expression Web 4.0(which was discontinued on December 20, 2012 but I still learned it in 2020 😉). Here I like to share some of them.
                    </p>
                    <p>
                        <b>Real state page: </b> It was a seven-page HTML project where I described all about a real estate company and details about some of their special products.
                    </p>
                    <p align="right">
                        <img src="./Assets/images/project-1.png">
                    </p>
                    <p>
                    <b>Online Shopping: </b> Here I described about some cosmetic products in details which are sold online.
                    </p>
                    <p align="right">
                        <img src="./Assets/images/project-2.png">
                    </p>
                    <p>
                        <b>Instructor evaluation form </b> In this form, student have access to evaluate the instructors and submit that one to the college website.
                    </p>
                    <p align="right">
                        <img src="./Assets/images/project-3.png">
                    </p>                    
                    `;
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




