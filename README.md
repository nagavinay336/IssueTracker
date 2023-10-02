#IssueTracker
A full stack app, which helps to track issues/bugs for the Project.


### Description

A full stack app, which helps to track issues/bugs for the Project.


### Live 


https://issue-tracker-1awl.onrender.com


### Tech Stack

Nodejs , Express, Mongodb , EJS , javaScript , html, css

To install and run the application, follow the steps below:
1. Clone the repository 
2. Navigate to the project directory
3. Install the dependencies - `npm install`
4. Create a `.env` file in the root directory with the following environment variables: -
    - `PORT=5000`
    - `MONGODB_URI=<your_mongodb_uri>`
5. Start the server: `npm start`
6. Open the app in your web browser at `http://localhost:5000`
   ```

### Features
  
  
  # HomePage 
  A list of projects will be displayed.A button will be provided to create a new project. Upon the creation of a new project, it will be added to the list.

  #CreateProjectPage
  The following fields will be accepted to create a project:

   Name
   Description
   Author

  #ProjectDetailsPage
  Upon clicking on a project on the home page, the user will be redirected to the Project Detail Page, where they will be able to view bugs related to that project. The following actions can be performed by the user on this page:

   Multiple labels can be filtered by (i.e., the user can filter by 2 or more labels simultaneously).
   Filtering by author is possible.
   Title and description can be searched by.
   A button will be provided to create an issue.

   #CreateIssuePage
   The user will be able to create an issue for a project on the Create Issue Page. The following fields will be accepted:

   Title
   Description
   Author
