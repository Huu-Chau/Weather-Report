# Sumary

Hi, my name is Nguyen Huu Chau.

And this is my side project called [Weather Report]

## Tech Stack:

- For the frontend, I am using ReactJS along with Bootstrap CSS to build a fully Responsive website.
- For the data, I use API key from https://openweathermap.org/api to fetch the data and with the help of Postman, I can get the required information for illustration.
- For web deployment, I use Vercel to display the web contents and features.
- Here is the link [Weather report - Check out what's in the sky above!](https://weather-report-b93lmx88r-chaus-projects-8bdd6df0.vercel.app)

## Detail Design

### 1. Requirement:
In order to build a Responsive Weather report system that shows the basic Weather status, air quality, and the time of sunrise/sunset.

We want to track the following statistic such as:
- Types of weather (Sunny, Cloudy, Rain, etc)
- Temperature (°C)
- Air quality (Humidity, Pressure, Visibility, Feels like)
- Current weather of different moments of the day.
- The weather status of the next 5 days.
- The input value where the User can enter the city name to display the staus of that area.

### 2. Component Structure
Here is the component structure of the website i made.

<img src="./ComponentStructure.png"></img>

## What I learned:

  From building the Weather report website, I got to have a large ammount of understanding about React and its concept, along with the basic principle of creating and deploying a website on the internet.

- Deep learning about components and component interactions.
- Understand the State concept (variable, setState, ...prevState, etc)
- Know how to destructure an object state and pass it to the Parent or Child component.
- Basic understanding of callbacks, promises and async awaits to fetch the data, convert parameter input and use useEffect.
- Learn the flows of the website so as to handle the error more efficiency.
- Learn how to fetch data and store it in a state to do different tasks (use it as parameter to fetch the data required from the parameter given, use the data to display on the website)
- Learn the functionality of packet.json, packet-lock.json, .gitignore and .env
- Understand the git commad to add, pull, commit and push the code onto the github, along with cloning the git repo if public.

## Future updates:

  This website has all the basic requirement of a Weather Report website.

  Which is why there are many updates I want to make onto the project, such as

- Adding animation such as the animation of the current weather (sunny, rain) in the background for better User experience
- Adding searching feature that zoning the closest input value and diplay it into a drop down list. This will require an understanding of backend coding. Which is why I have plans to learn Nodejs to make it happen.
- Change the "Submit Location" button into "Current Location" as we will click directly on the drop list to display that city's weather status
- Adding features to convert the tempreture from °C to °F, as well as convering km/h into mph/h
- Create a navigation bar with Home that display the content of the website and Saved city that store the city's weather status you saved and display it on the Home page.
- I have plans of learning React Native in order to deploy a true app, not just a website.
- In the app, i want to display the data of the area the user is standing. This will require google maps api and I will updates this feature after finishing React Native.
