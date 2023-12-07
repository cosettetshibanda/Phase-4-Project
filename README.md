# Frontend Animal Categories

## Project Philosophy
I started this project because my two year old daughter is super into animals right now. I hear about them all day and all night. So I set out with this thought in mind. This website is designed to create a data set to organize different animals into categories. It allows you to view these animals in an organized format.

## Details

```txt
├── public
└── src
     ├── Components
        ├── App.js
            ├── Navbar.js
            ├── CategoryList.js
                ├── Category.js
            ├── CategoriesForm.js
            ├── CategoryCard.js
                ├── Animal.js
                ├── AnimalForm.js
└── App.css
├── db.json
├── README.md
```

This project is set up with react and is sent nested data from a sinatra backend program. It has multiple navlinks to different pages. Allow full CRUD capabilities. 
It has Get, Post, Patch, and Delete requests on the Animal data and Get and Post on the Category data. This code uses a lot of mapping and filtering to access the nested data and allow you to change the deeper aspects of the data.


## Features
This webiste allows you to create and view a list of categories. These categories describe different groups of animals that range from safari animals to sea creatures. It also shows you the animals that can fit into each category. You have the capabilities of adding new animals to specific category, deleting an animal from a category, and editing the image of an animal.

## How to Use
To view the different animals in each category you must click on the "see animals" link underneath the image of the category. This will take you to the new page with a list of all the animals. You can delete any of the animals by clicking on the little garbage can emoji. If you input a image address into the form below and submit it the picture of the animal will update. Another thing that it allows at the bottom of the page is an option to create a new animal in that category. You do this by filling out the form and submitting it. There is also an option to add a new category and that is done by submitting the form under the link at the top of the page called "new category."

## Installation Instructions
To get this app up and running you need to by forking and then cloning this on github and running npm start. This will bring up the website. To get the website to work you must also get the back end up and running. You can find the back end at this link https://github.com/cosettetshibanda/phase-3-project. You will need to fork and clone this one as well. Once that is up you need to run rake server to get the backend up and running.

## Contributions
If you would like to make contributions to this website contact the creator at cosettetshibanda@gmail.com

## Blog
https://medium.com/@cosettetshibanda/working-with-nested-data-on-the-backend-of-a-website-3f3f7e888ac5