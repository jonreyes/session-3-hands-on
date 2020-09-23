## React JS Hands-On Tutorials


## Take Home Assignment
We will be taking our classroom hands-on learning a bit further and creating a simple bio-profile application in React. Refer to Bio-Profile.PNG for the expected output

### Exercise 1
Your first exercise will involve the following files - src/App.js, src/BioProfiles.js and src/constants.js
* First look at constants.js file and familiarize yourself with the array of objects data
* Follow instructions in App.js. Read the comments provided in the file
* Follow instructions in BioProfiles.js file.

## Exercise 2
Your second exercise will involve creating src/BioProfile.js and its related components
* Create a class-based component named BioProfile which will accept all the props from BioProfiles. You can have a console statement to check all the props that are passed here
* Create three functional components named Name, Country and Age which will accept the name, country and age props respectively from BioProfile
* Create two class-based components named DateOfBirth, Skills which will accept the dob and skills props from BioProfile
* Make sure to import and plugin all the components inside BioProfile component

## Exercise 3
Your third exercise will involve the following files - src/Age.js, src/Name.js, src/DateOfBirth.js, src/Country.js
* Make sure that the above mentioned components are accepting the props properly from BioProfile
* The components should render on the screen as shown in Bio-Profile.PNG
* If there is no country mentioned in the bioProfile data, pass *United States of America* as the Default Value
* Change the rendered date from dd/mm/yyyy to mm/dd/yyyy format

## Exercise 4
Your fourth exercise will involve the following files - src/Skills.js and src/Skill.js
* The Skills component accepts props which is an array of skills that a person has
* We need to creata a new component called Skill which can take in one skill as a prop
* Import and plugin this component inside Skills. Make use of the map function to pass the skill to the Skill component. You can refer to the map function used on BioProfiles component to create this new map function
* Make sure that the data is rendered as shown in Bio-Profile.png
* Run and make sure your entire application works

## Exercise 5 (Optional)
* Add additional styling in public/app.css file to enhance the look and feel of your completed application
