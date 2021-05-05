## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing

A step by step series of examples that tell you how to get application up and running.

To install dependencies locally and run app:

```
> npm i
> react-native link

#Android
> cd ...\Android\Sdk\tools && emulator -avd Pixel_2_API_26
> cd ...\mobileapp && react-native run-android

#iOS
> cd ios
> pod install
> npm start

Then open Xcode via .xcworkspace file and run a project via the Play button (>)
```

## Running the tests

Currently there are no tests (CI & CD) in the project.

## Deployment

Deployment is possible via marketplaces:

* [For iOS](https://appstoreconnect.apple.com/login)
* [For Android](https://play.google.com/apps/publish/signup/)

**To log into account on the marketplace, ask the development team for credentials**

## Built With

* [React Native](https://reactnative.dev/) - JavaScript framework for creating native apps for Android and iOS using React.
* [NPM](https://www.npmjs.com/) - JavaScript dependency management.

## Versioning

We use [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for versioning.
