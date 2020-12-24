# the scenario is:

1-Imagine you are looking for a particular price range $2000-$3000 and blue colour.

2-The result would be an array of different car makes that you are going to sort based on age and show the 6 newest cars.

3-Pick the first car of the list and based on the make of the car, BMW, Fiat, Porsche, …, recommend 4 cars of the that make. So if the first car in the list is Honda, show 4 Honda cars.

# Thinf to consider:

1-For the price range, use a dropdown with four select option:
$1000-$2000
$2000-$3000
$3000-$4000
\$20000-22000

2-For the color selector,use a dropdown with the following options:
Blue
Pink
Green
Khaki
Indigo
Puce
Crimson

3-The checkbox Availability should be default to false

4-When hit "Result" button, the application will fetch the cars that matches the selected criteria and show in the next page

5- on top of the result page,I may show only 6 of the cars that meet the criteria ordered by age of the car,show the newest 6 cars

6- At the bottom of the page, show 4 recommanded cars based on the type of the first car.

7-Both pages should be handled on 1 page and DON'T need to use react-router

8- On each box,the following details should be shown:
-Car name(BMW,Fiat,...)
-Car model(330d,300E,...)
-Car color(Blue,Red,...)

9-If there is no result based on criteria,show an empty space saying that there is no result but still show the recommended 4 options based on the model of the car

#Data Source
For the data source,I use the following library:
https://github.com/NerdyLuffy/myFakeApi
When you run it locally,the api can be accessed on http://localhost:9000

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
