# Car Seat Options

## Project Philosophy
As a parent there are a million different options for everything. So many decisions are having to be made on a daily basis. The point of this project is to make one of those big descisions a bit easier. 

There are a lot of different car seat out there for your child and you want to make sure you pick the best one for you. You want one that is safe for your child, fits well in car, and works with your lifestyle. Some people may want a skinnier car seat to fit best in their car. Others, might want one that comes with a stroller for easy transportation. 

The best way to figure out which car seat is best for you is to hear from the parents who have actually used the car seat. If you get all your information from the car seat company it can be overwhelming and not very helpful. So hearing the specifics from others in your situation can be the best resource. 

## Details

This project is set up with react frontend and is sent nested data from a ruby on rails backend program. It has multiple navlinks to different pages. Allow create and read capabilities to all components. As well as full CRUD capabilities to the join table. All the nested data is connected together in a many to many relationship. There are users with many reviews to many car seats. 
It has Get, Post, Patch, and Delete requests on the review data and Get and Post on the User and Car Seat data. This code uses a lot of mapping and filtering to access the nested data and allow you to change the deeper aspects of the data.


## Features
This webiste allows you to create and view a list of car seats. With each car seat is a button that allows you to see the reviews and add your own. With your reviews you are able to edit or delete them but you are unable to edit and delete someone elses. 

At the top of the page are links that allow you to see all the reviews that people have added, the car seats that you have put reviews on, the ability to add a new car seat to the list, and logout of your account. 

## How to Use
This app gives you the option to view all carseat. There is a link at the top allowing you to add a carseat. You fill out the form and submit it then your carseat will appear at the bottom of the list of carseats. You can add a review on a carseat, view reviews, and delete a review that you have created. You are only allowed to review the same carseat once. There is also a link at the top that allows you to see all the carseats you have reviewed.
<!-- To view the different animals in each category you must click on the "see animals" link underneath the image of the category. This will take you to the new page with a list of all the animals. You can delete any of the animals by clicking on the little garbage can emoji. If you input a image address into the form below and submit it the picture of the animal will update. Another thing that it allows at the bottom of the page is an option to create a new animal in that category. You do this by filling out the form and submitting it. There is also an option to add a new category and that is done by submitting the form under the link at the top of the page called "new category." -->

## Installation Instructions
To get this app up and running you need to by forking and then cloning this on github and running npm install --prefix client and npm start --prefix client. This will bring up the website. To get the website to work you must also get the back end up and running. To do this you put in the terminal rails db:migrate and rails s. 

## Contributions
If you would like to make contributions to this website contact the creator at cosettetshibanda@gmail.com

## Blog
https://medium.com/@cosettetshibanda/ruby-on-rails-serializers-ed8bd1a14fa6