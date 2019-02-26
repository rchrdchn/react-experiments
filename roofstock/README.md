# Roofstock

__Coding Exercise: Front-end Developer: ReactJS__

Here are the step-by-step instructions on how to run the final project as well as the project description, details, and other notes.

## Installation

* Unzip roofstock.zip file
* Open your preferred terminal
* Change directory into the folder (roofstock) –– for instance: `cd roofstock`
* Run `npm start` or `yarn start`
* Open [http://localhost:3000](http://localhost:3000) to view the final project/solution in the browser
* Page will reload if you make edits

## Project Description

* Data source: 
[http://dev1-sample.azurewebsites.net/properties.json](http://dev1-sample.azurewebsites.net/properties.json)
             
* Display the properties from the data-source above in a card/list view with following fields, user should be able to toggle between card/list views.

## Properties (card/list views) Fields

* Property Image _(mainImageUrl)_
* Address  _(address)_
* Year Built _(physical.yearbuilt)_
* List Price $ (formatted to two decimal places - e.g. $120,000.00) _(financial.listPrice)_
* Monthly Rent $ (formatted to two decimal places - e.g. $1,234.00) . _(financial.monthlyRent)_
* Gross Yield % ('Monthly Rent' * 12 / 'List Price') - e.g. 12.55% (calculated)
 
## Property Detail

* When a user clicks on a property card view or list view, navigate to property detail route and display
* Address of property _(address)_
* Carousel that allows user to navigate between images _(resources.photos)_

## Note

For styling inspiration, refer to [https://www.roofstock.com/investment-property-marketplace](https://www.roofstock.com/investment-property-marketplace).
Application should be using ReactJS. You may use any styling solution to style the pages.

__Include a zip file or a link to download the zip for the solution in the email and also include any instructions to run the solution.__


## Additional Details

**Tech Stack**
* ReactJS
* React Router
* Material-UI
* Font-Awesome

Project GitHub Repository: [Roofstock](https://github.com/rchrdchn/react-experiments/tree/master/roofstock)

**Richard Chan** | [GitHub Profile](https://github.com/rchrdchn) | [LinkedIn Profile](https://www.linkedin.com/in/rchrdchn/)

--
