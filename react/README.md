# Template — React

### For when create-react-app just doesn't give you what you want.

<img width="1792" alt="Screen Shot 2020-09-03 at 2 38 49 PM" src="https://user-images.githubusercontent.com/23178940/92176429-48a79700-edf3-11ea-98eb-5e634d6b77b9.png">

<img width="1792" alt="Screen Shot 2020-09-03 at 2 39 00 PM" src="https://user-images.githubusercontent.com/23178940/92176421-45141000-edf3-11ea-8a42-149d09791ce9.png">

Basically, this template serves as an opinionated `create-react-app` for how I personally develop React applications. I chose to exclude a lot of the random junk (even if it is somewhat useful) from the default files it gives you so it's clearer what does what and what files are actually necessary for a bare minimum app. I also included some more modern React best practices like using containers, React Hooks, and functional components.

# Contents

```python
src
├── components # pure components that just render stuff
│   ├── App.js # main app that defines routing
│   ├── Footer.js # header and footer that appear on every page
│   ├── Header.js # ..
│   ├── Hello.js # simple hello page
│   └── Joke.js # page to display a bad dad joke
├── containers # components that handle data
│   └── DadJoke.js # calls dad joke api and renders Joke.js
├── index.css # root-level styling
└── index.js # main React render
```

# Development

Do `yarn` to install dependencies then `yarn start` to start a development server on `http://localhost:3000/`.

# Firebase Hosting

Hit that `firebase init`

```bash
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, th
en Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection)
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
 ◯ Functions: Configure and deploy Cloud Functions
❯◯ Hosting: Configure and deploy Firebase Hosting sites
 ◯ Storage: Deploy Cloud Storage security rules
 ◯ Emulators: Set up local emulators for Firebase features
```

Then create a new project. After this step successfully completes, run `firebase deploy` to deploy your changes.
