# React Coding Sample

In this repository, you'll find some setup code for a basic react project. The purpose of this exercise is just to get a feel for your personal coding styles and preferences.

## Task

Your task is to create a simple sign up flow. We are looking primarily at code style and architecture - we won't look at the visual UI at all (as long as it works). There are a few required fields:

- Email input
- Password input
- Confirm Password input
- First Name input
- Last Name input
- Terms & Conditions checkbox

In addition, there are some requirements for form submission:

- Password must match Confirm Password field
- Terms & Conditions must be checked
- All other inputs must not be empty

## Navigation

There are a few key files/directories you'll need to look at to complete this project:

- `src/containers/RootContainer/index.js` contains the main Switch that will decide which components to load
- `src/js/actions` contains various redux actions that will be useful
- `src/js/middlewares/userMiddleware.js` contains a dummy signUp function that you'll use to simulate a network call
