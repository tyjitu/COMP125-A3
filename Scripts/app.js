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
            
            // if((title === "home"))
            // {            
            // newParagraph.textContent =`This is an example paragraph. Here is the next line.`;
            // }
            // step 4 attach the new element
            jumbotron.appendChild(firstDiv);
            // jumbotron.appendChild(secondParagraph);
            // jumbotron.appendChild(thirdParagraph);
            // jumbotron.appendChild(fourthParagraph);

            // back to step 2 - create a new element
            let newDiv = document.createElement("div");

            // step 3 - configure
            // newDiv.innerHTML =
            //     `
            //     <p id="secondParagraph">
            //     This is the second Paragraph.
            //     </p>
            //     `;

            // step 4 attach the new element
            jumbotron.appendChild(newDiv);


            return true;

        }

        return false;
    }

    // function validateForm()
    // {
    //     let contactForm = document.forms[0];

    //     if(contactForm)
    //     {
    //         contactForm.noValidate = true;

    //         let errorMessage = document.getElementById("errorMessage");

    //         let firstName = document.getElementById("firstName");
    //         firstName.addEventListener("blur", (event) => 
    //         {
    //             if(firstName.value.length < 2)
    //             {
    //                 firstName.focus();
    //                 errorMessage.hidden = false;
    //                 errorMessage.textContent = "Please enter a Valid First Name with a length of 2 or more characters"; 
    //             }
    //             else
    //             {
    //                 errorMessage.hidden = true;
    //             }
    //         });

    //         let lastName = document.getElementById("lastName");
    //         lastName.addEventListener("blur", (event) => 
    //         {
    //             if(lastName.value.length < 2)
    //             {
    //                 lastName.focus();
    //                 errorMessage.hidden = false;
    //                 errorMessage.textContent = "Please enter a Valid Last Name with a length of 2 or more characters"; 
    //             }
    //             else
    //             {
    //                 errorMessage.hidden = true;
    //             }
    //         });



    //         // creates a "hook" or reference to the button element with an id of "submitButton"
    //         let submitButton = document.getElementById("submitButton");

    //         submitButton.addEventListener("click", (event) =>
    //         {
    //             event.preventDefault();
    //             console.log("Submit Button Clicked");
    //         });
    //     }
    //     return false;
    // }


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

    //    let formValidated = validateForm();
    //    if(formValidated)
    //    {
    //     console.log("successfully validated form");
    //    }
    //    else
    //    {
    //     console.warn("form not validated - does not exist");
    //    }

    } 



    window.addEventListener("load", Start);

})();




