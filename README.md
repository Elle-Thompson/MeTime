# Project Overview

## Project Links

- [Github repo link](https://github.com/Elle-Thompson/MeTime)
- [Deployment link](https://elle-thompson-metime.netlify.app/game)

## Project Description

**Project is currently in version 1 with full game functionality**

This is a project that I have wanted to create for a while. Version 1 includes a remodeled version of a childhood favorite game called "Bop It" built entirely in react. Version 2 adds a journal feature with user authorization using react for the front-end and Django/Python for the back-end database. This feature will provide full CRUD operations for journal entries.



## Wireframes



- [Wireframe (Home)](https://res.cloudinary.com/dhslunnmd/image/upload/v1639700144/Project%204%20-%20MeTime%20%28screenshots%29/Screen_Shot_2021-12-16_at_4.13.25_PM_numvng.png)
- [Wireframe (Game)](https://res.cloudinary.com/dhslunnmd/image/upload/v1639700150/Project%204%20-%20MeTime%20%28screenshots%29/Screen_Shot_2021-12-16_at_4.13.41_PM_xalahn.png )
- [Wireframe (Journal)](https://res.cloudinary.com/dhslunnmd/image/upload/v1639700155/Project%204%20-%20MeTime%20%28screenshots%29/Screen_Shot_2021-12-16_at_4.13.55_PM_gclqt2.png )




### MVP/PostMVP - 5min

The mvp functionality will include basic character search abilities using character name and the ability to save specific characters to a list of favorites.

#### MVP 
- Construct app components
- Construct routes
- Construct "Bop-It" components
- Construct "Bop-It" functionality 
- Add animations
- Add component styling
- Add sound clips
#### PostMVP 
- Construct Journal component
- Create full CRUD capabilities for journal
- User auth for journal
- Style journal component


##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will house the routes| 
| Header | This will render the nav | 
| Game | This will render the game | 
| Journal | This will render the journal and entries|
| Home | This will render the links to other components |


##### TimeFrames

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create components | H | 8hrs| 1hr |
| Game functionality | H | 12hrs| 26hrs |
| Routing | H | 2hrs| 2hrs |
| Links | H | 2hrs| 1hr |
| Styling | H | 16hrs| 20hrs |
| CRUD | H | 12hrs| TBD |
| User auth | H | 10hrs| TBD |
| Music player | H | 24hrs| TBD |
| Total | H | 86hrs| 50hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

Google Fonts
Font awesome

## Code Snippet

<!-- This snippet was borrowed from stackoverflow - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array -->

```
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
```
