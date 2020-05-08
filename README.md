# 🥏 UltimateApp

Developing an app to enhance Ultimate coaching abilities

## ⌨️ Development

You need a recent version of nodejs.

```
git clone git@github.com:UltimateApp/UltimateApp.git
cd UltimateApp
npm install -g expo-cli
npm install
npm run start
```

## 👏 Contributing

If you want to contribute to the projet, just pick up a free issue from the [list](https://github.com/UltimateApp/UltimateApp/issues) and start developing. You can then open a pull-request so that your contribution can be merged into the master branch.

### Tests

We expect every code introduced via a pull-request to be tested.
We use [jest](https://jestjs.io/docs/en/tutorial-react-native) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) as testing frameworks. Please refer to the documentation, look at [existing tests](https://github.com/UltimateApp/UltimateApp/blob/master/src/Components/DrillListPage.test.js) or ask questions if needed.

### Mock http records

We use [nock](https://github.com/nock/nock) to mock HTTP calls. Have look at an example [here](https://github.com/UltimateApp/UltimateApp/blob/master/src/Components/VimeoVideo.test.js).

To get the expected return from Nock, you can run your tests without mocking and record the http calls. The documentation is [there](https://github.com/nock/nock#recording).

### 🆘 Help! 
If you need to understand the basic specifications of the app, have a look at [the wiki](https://github.com/UltimateApp/UltimateApp/wiki).

And feel free to ask questions!


## License

The app source code is made available under the [MIT license](LICENSE).
