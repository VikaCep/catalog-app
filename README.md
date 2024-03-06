# Santex RBI Team - Front End Training Challenge

### Tools I used:

- Create React App
- TypeScript
- Styled Components
- Apollo Client
- Jest and React Testing Library for unit tests

### How to run

- Clone the project and install dependencies using

    `yarn`

- Start the app by running

    `yarn start`

- Run unit tests using

    `yarn test`

### How it looks

Upon running the app the items view will be shown.
 
<img width="1788" alt="image" src="https://github.com/VikaCep/santex-fe/assets/6271380/8a1e3e27-5c72-4730-83ca-d4770a37d924">


By default it lists the first 15 products not to retrieve a very big response from the server. You can load more items by pressing the Load More button, which fetches 15 more each time.

<img width="1688" alt="image" src="https://github.com/VikaCep/santex-fe/assets/6271380/7bf06c9d-06c5-4dab-aedd-ac8d6644fe59">

-----

When buying an item, a request to the shop-api with the operation `AddItemToOrder` is made. This adds the currenet item to the active order. In addition, the app keeps track of the total and displays it at the top right of the header, which is maintained even if the page is refreshed.

![2024-03-06 17 08 26](https://github.com/VikaCep/santex-fe/assets/6271380/743fc020-e3d3-43b0-8789-344d0327a888)

-----

Since there are several item variants for each product and the price depends on this, I added a select component that allows you to choose the desired one in order to add it to the cart

<img width="321" alt="image" src="https://github.com/VikaCep/santex-fe/assets/6271380/9c0ec16e-9b28-44e5-9e06-24e0535f3e8d">


### Implementation details

- The app uses `Create React App` to bootstrap the project as it provides a very simple yet robust way to create and configure the project leaving everything ready to start coding.

- In terms of folder structure, I don't have a strong preference on it. For this project I intended to keep things simple by grouping components together in a `components` folder, hooks under `hooks` and GraphQL related files under `graphql`.

- For styling I used `styled-components`. It offers a convenient and flexible way to style React components while keeping styles organized and maintainable as it enables encapsulation within individual components, making them more self-contained and reusable.

- In order to obtain the data from the API, the app uses `Apollo Client` which provides a very convinient way to fetch data in a declarative manner, making the code more readable and maintainable.

- For tests, I'm using `Jest` and `react-testing-library` to make sure components and custom hooks are behaving as it is expected.

### Future Improvements
- Improving caching so that when more items are loaded, the previous ones are not re-fetched.
- The data types could be generated automatically using Apollo Codegen. I didn't do it in this project because there were simple interfaces but as the model grows bigger I believe that would be a better option.
- Display information about the current cart by consuming the `activeOrder` GraphQL query instead of having to save the total locally into `localStorage`, even though this involves making an extra request to the server.
- E2E tests should be added, a good library for this would be Cypress, as I believe it's very important to have good coverage of the codebase in order to deliver a robust application.
