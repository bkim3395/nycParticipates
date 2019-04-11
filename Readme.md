# Javascript Project Proposal: NYC Participates! - Data Visualization of New York City Council Participatory Budgeting

(Note to TAs: I am not sure how ambitious/hard this project is. I made a backup proposal here:
https://github.com/bkim3395/Divide)

## Introduction

The site visualize data from 2012 to 2017. The user can select the year and filter by categories and city council districts. Each dot in the Google Map API will represent the project that has passed. By clicking on the dot, it will show the details such as title, descriptions, money assigned to the project and so on. 

## MVP (Highly Susceptable to Change)

+ Create Google Map API and implement City Council districts GeoJSON
+ Implement d3.js into the site
+ Allow filtering by year and distribute them to each corresponding council districts
+ Allow user to see details of the project if dot is clicked
+ Advanced flitering - Categories, etc.
+ Allow users to see failed proposals (bonus)

## Technologies Implemented

+ D3.js
+ Google Map API
+ Javascript

## Wireframe

![](https://raw.githubusercontent.com/bkim3395/nycParticipates/master/wireframe.jpg)

Timeline:

+ Day 1: Implement Google Map and GeoJSON
+ Day 2: Implement d3.js and features into the site
+ Day 3: Implement visualization of data on Google Map and basic filtering by year
+ Day 4: Implement seeing details and advanced filtering