# 🥏 UltimateApp - Disc In

Developing an app to enhance Ultimate coaching abilities

## ⌨️ Development

You need a recent version of nodejs.

```
git clone git@github.com:disc-in/UltimateApp.git
cd UltimateApp
npm install -g expo-cli
npm install
npm run start
```

## 👏 Contributing

If you want to contribute to the projet, just pick up an issue from the [list](https://github.com/disc-in/UltimateApp/issues) and start fixing it. You can then open a pull-request so that your contribution can be merged into the master branch.

Found a bug? Take 5 minutes to [report it](https://github.com/disc-in/UltimateApp/issues/new?assignees=&labels=bug&template=bug_report.md&title=)

Not a developer? We always need people to help us with:
* improving the **wording** of the application, drills, training programs, to make it easier to understand;
* drawing the **animations** of the drills in the app;
* **testing** the app;
* **gathering feedback** from our users;
* **processing the feedbacks** we get to decide which features should be implemented;

Feel free to contact us on [facebook](https://www.facebook.com/DiscInApp) or by email (ultimate.discin_at_gmail.com) to discuss it.

### Tests

We expect every code introduced via a pull-request to be tested.
We use [jest](https://jestjs.io/docs/en/tutorial-react-native) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) as testing frameworks. Please refer to the documentation, look at [existing tests](https://github.com/disc-in/UltimateApp/blob/master/src/Components/DrillListPage.test.js) or ask questions if needed.

### Mock http records

We use [nock](https://github.com/nock/nock) to mock HTTP calls. Have look at an example [here](https://github.com/disc-in/UltimateApp/blob/master/src/Components/shared/VimeoVideo.test.js).

To get the expected return from Nock, you can run your tests without mocking and record the http calls. The documentation is [there](https://github.com/nock/nock#recording).

## Release

To release a new version of the app :
1. Send a pull request updating the version in `app.json`, as well as buildNumber (ios) and versionCode (android)
2. When it is merged, create a release on Github
3. `expo publish --release-channel staging`
4. If needed, republish to the stores

## 🙏 Thanks

Thanks a lot to everyone helping `Disc In` become an awesome app!

* Every direct [contributor](https://github.com/disc-in/UltimateApp/graphs/contributors) to the code
* UX design: Martin VDD
* Wording: Scott Graber, Anja Hopma
* French dictionary: Cheikh F. Ndiaye
* Visual contents (photos): [Focus Ultimate France](https://www.facebook.com/ultifocus/)
* Alpha testing: Tiphaine Champetier, Ludovic Romano, Fred Risse, Edwin Grappin, Marie Collet, Hugues Andrieux, Vincent Peltre, Pablo, Lili Magerand, Quentin Siour, John Kofi, Guillaume Giroux, Théo Veaudor, Guillaume Tessier, Poupsy, Matt Hill, Quentin Walsh, Sarvani, Benjamin Bourdon, Elise Lefèbvre
* Videos: Paulin Huger, the PUC players (Nalini, Mario, Mehdi, Seb, Puzzy, Luc, Quentin)

## 📜 License

The app source code is made available under the [MIT license](LICENSE).
