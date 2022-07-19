# SpaceX API

For this assessment, a small React application is built where the Open Source 'SpaceX API' is used, which is a community driven API that allows accessing serval SpaceX resources.
The API can be found at [https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs](https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs)/


__View the result here:__
__[space-x-gamma.vercel.app](https://space-x-gamma.vercel.app/)__

#### Assignment 1
Create a homepage that displays general company information and details. 
Also, show 3 crew members on initial load. Add the ability to show more crew members by clicking a show-more button.

#### Assignment 2
Create crew page that allows for searching crew members, showing all crew members and allows sorting by name or agency.

#### Assignment 3
Implement a feature that allows 'liking' a crew member by selecting a crew member on either the homepage or crew-page.
The liked crew members state should persist on refresh.

### Code and structure
This application was built using ` npx create-react-app spacex --template redux-typescript`.
The project structure is set up as:
```
├── cypress
├── public
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── app
│   │   ├── components
│   │   ├── hooks.ts
│   │   ├── pages
│   │   └── store.ts
│   ├── assets
│   │   ├── heart.png
│   │   └── universe.png
│   ├── features
│   │   ├── company
│   │   └── crew
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── tailwind.css
│   ├── tailwind.output.css
│   └── utils
│       ├── ScrollReveal.tsx
│       ├── helpers.ts
│       ├── urls.ts
│       └── windowSize.tsx
```


# Running the application

Install all packages by running `npm install` in the project directory.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
