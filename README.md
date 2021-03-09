# Recreating the WeTransfer spinner

This deploys to https://wetransferspinnermain.gatsbyjs.io/ using Gatsby Cloud

Tools Used:

- Gatsby
- React
- Styled-Components
- Redux
- Jest
- React Testing Library

Tests can be run with `npm test`

All relevant files are located in `src` folder:

- `<Button />`
  - Button component that comes in multiple different states (e.g. <ActiveButton />)
- `<Card />`
  - Card component is used to create a container for content. Card has a `<CardBody />` and `<CardFooter />` that can be used to keep content consistent looking.
- `<Spinner />`
  - Spinner is the animation that is shown during uploads. It shows the upload progress bar that spins and has the percent complete in the middle.
- `<UploadCard />`
  - UploadCard is the component that is rendered in `App.js`. This uses the other components to create the upload flow that shows the spinner.
