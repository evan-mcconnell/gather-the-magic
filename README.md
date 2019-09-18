# GENERIC README FORMAT

#### Job and Inventory Tracking for Your Business

_Published_ **April 26 2019**<br>
_Authors_  **Kim McConnell**

1. [Description](#description)
1. [Target Audience/Users](#target-audience/users)
1. [User Stories](#user-stories)
1. [Product Requirements](#product-requirements)
1. [Non-technical Requirements](#non-technical-requirements)
1. [Planning](#Planning)
1. [Development Specs](#development-specs)
1. [Stretch Goals](#stretch-goals)
1. [Installation](#installation)
1. [Technologies Used](#technologies-used)
1. [License](#license)

## Description
<hr/>
  Implementing the practices of Just in Time (JIT) production can be difficult if you don't have a good grasp on how much inventory gets used per job. This application helps you in this by allowing you to set production phases/lanes, job types, and pre-defined inventory. You can add instances of jobs and move them through the lanes,and the associated inventory for that job will decrease and be tracked by the system. These inventory totals are then displayed on the "Inventory" page, allowing you to place orders frequently and accuratly, as well as identify trends. 


## Target Audience/Users
<hr/>
* Buisnesses, primarily manufacuring, that rely on inventory. 

## User Stories
<hr/>

**As a** buisness owner<br>
**I want** to see the inventory that is being used in a given time frame and place orders for more inventory frequently<br>
**So that** I can follow JIT/Lean prinicples to reduce inventory store size and reduce waste, increasing profit margins. 

**As an** employee<br>
**I want** to be able to quickly see a visual representaion of how many jobs are ongoing, which ones are behind schedule, and what inventory will be consumed by each<br>
**So that** I can effiently plan for today's tasks and ensure the inventory is there to perform those tasks. 

## Product Requirements
* Full CRUD functionality for job types, individual jobs, and inventory types
* Display jobs that have been added to the board
* Display how much inventory a job is using at a given phase
* Inventory view shows total inventory used in a given time frame. 


## Non-technical Requirements
<hr/>
* Have jobs display on a post-it like div that flips over for details page (Stretch)<br>

## Planning
<hr/>

Plan for **5/10/19** (second Friday capstone work day)
Front-End related (this repo)
- Work on static front end
  - Build out lane map more concretely
  - Use Moment.js to show how long a job has been in progress
  - Build an expandable "menu" that shows a snapshot of inventory
- Plan and build out static inventory screen (will use routing here)

Back-End related (Digital-Job-Tracker-API repo)
- Already done: Knex migration to set up LANES, JOBS, and LANES_JOBS tables
- Write put requests that work for these tables and fill the LANES_JOBS connecting talbe with id's from the others
- Figure out how to correcting write these requests using functions in a "models" folder for better organization (that imports, etc)
- Convert Mocha tests into Jest (Mocha is working but I figure it's better to learn Jest my fully instead, and I like Jest)
- EVENTUALLY (ie. not today) add inventory table


## Component Map

#### First Draft of Component map 
![Component Map First Draft](./src/assets/images/plan1.png)

#### The Slices of "State"
Slices: 
- masterJobTypes
- masterInventoryTypes
- masterJobsList
- masterLaneTypes (stretch)
- sideBarOpen (bool)(strech)
- selectedLane
- selectedJobType
- selectedJob

### Development Specs
<hr/>
* 

## Stretch Goals
<hr/>
* 

## Installation
<hr/>
* Clone from https://github.com/kimmcconnell/Digital-Job-Tracker.git
* Run `$ npm install`
* Run `$ npm run start`
* Navigate to http://localhost:8080/ in your browser to see the page. 



## Technologies Used
<hr/>

### Musing and Decisions on Technologies to use
- This was always going to be a React app. 
- Original intent was to use a SQL database for data storage. 
- GraphQL was brough up as something I should look into, and I did. It's a great technology, with the primary advantage being it reduces the load on the user's data to query, since the queries are getting very specific bits of information instead of all data at a specified endpoint. This makes it faster and often more secure as well (exposing less endpoints). But how to integrate? Some options I considered: 
    - It can be used with Express with a SQL database
    - It can be used "alone" (but probably with some other techs) with _any_ database
    - It can be used with Express being hosted by Firebase Functions, since Express is basically one big function. This meathod seemed elegant and neat, and I spent some time exploring Firebase Functions (even got some to work!) before deciding that I still did not want to use Firebase's no-sql database. 
- I ultimaty decided to use MySQL with Express middleware and Knex for query building, migrations, and seeds because I have some experience with it and I know I can make that stack work. Integrating GraphQL _in addition_ to these is a strech goal, and something I'd like to play around with in the future.
- I looked into Relay, an alternative to Redux that requires React and GraphQL. An elegant solution, for sure, but I decided against it mainly because my first step would necessarily be seeting up GraphQL, which I was undecided on using anyway. If I had GraphQL experience already, I would have probably used Relay; each component is wrapped in a container which gets a specified set of data (only exactly what it needs) from GraphQL.
- I chose to start the project with create-react-app to take advantage of a fully-functional evnvironment using the latest verion of React to have the option of Hooks and other things specific to the latest version.
- I'm using the styled-components library for at least some styling.


### Technologies Used in Final Product
* React
* Webpack w/ Babel, Hot Module Replacement
* jsx 
* CSS

<br>

## License
[MIT](./LICENSE.txt)

Copyright (c) 2019 Kim McConnell
