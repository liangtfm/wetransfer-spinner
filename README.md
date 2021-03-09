# Recreating the WeTransfer spinner

Tools Used:

- Gatsby
- React
- Styled-Components
- Redux

All relevant files located in `src` folder:

- `<Button />`
  - Button component that takes in a `buttonType` and `onClick` and returns a styled button (e.g. 'active', 'cancel')
- `<Card />`
  - Card component is used to create a container for content. Card has a `<CardBody />` and `<CardFooter />` that can be used to keep content consistent looking.
- `<Spinner />`
  - Spinner is the animation that is shown during uploads. It shows the upload progress bar that spins and has the percent complete in the middle.
- `<UploadCard />`
  - UploadCard is the component that is rendered in App.js. This uses the other components to create the upload flow that shows the spinner.