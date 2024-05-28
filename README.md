# VisitedApp

The app is powered by React Native and builds for both mobile and the web, this repository is setup using the [guide available here](https://gist.github.com/insertish/9cca9b6aa75a7cf34d050368d067ecf5).

## Get Started

First, [configure your environment](https://reactnative.dev/docs/environment-setup#development-os).

Clone and run locally:

\```sh
git clone https://github.com/your-org/repo App
cd App
yarn
yarn start
\```

> When starting the bundler in the future, use `yarn previous`, unless if you are also using the Storybook, in which case you need to run `yarn start` at least once when switching back.

If building for an Android device, [reconfigure your keystore](https://gist.github.com/insertish/9cca9b6aa75a7cf34d050368d067ecf5#recurring-setup).

Now, launch the app on your phone:

\```sh
# Launch Android app
yarn android

# Launch iOS app (requires Mac)
yarn ios
\```

### Launching Web app

To launch the web app, we can skip using the Metro bundler:

\```sh
# Launch Vite.js bundler
yarn web
\```

### Storybook

This repository uses Storybook for previewing components.

Instructions on running [can be found here](https://gist.github.com/insertish/9cca9b6aa75a7cf34d050368d067ecf5#running-storybook).