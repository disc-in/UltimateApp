# 🥏 UltimateApp - Disc In

Developing an app to enhance Ultimate coaching abilities

## ⌨️ Development

You need a recent version of nodejs.

Clone the project and install all its dependencies:

```
git clone git@github.com:disc-in/UltimateApp.git
cd UltimateApp
yarn install
```

Copy the environment file and fill the blanks:

```
$ cp .env.example .env
```

(Firebase env variables are only used if you share custom plays or drills)

And finally, start the project:

```
yarn start
```

### External dependencies

The Disc In app relies on **Firebase** for sharing drills and plays. For this reason, each play gets a unique "**share identifier**" which is a 10 characters long hexadecimal string. It makes sure plays and drills uploaded on Firebase do not override one another. It is different from the **id/uuid** plays and drills have locally, used to manage the redux store and make sure each action is applied to the right record. This is necessary because users may download the same drill several times, or reshare a drill they have downloaded, without impacting other instances of the drill.

## 👏 Contributing

If you want to contribute to the project, just pick up an issue from the [list](https://github.com/disc-in/UltimateApp/issues) and start fixing it. You can then open a pull-request so that your contribution can be merged into the main branch.

Found a bug? Take 5 minutes to [report it](https://github.com/disc-in/UltimateApp/issues/new?assignees=&labels=bug&template=bug_report.md&title=)

Not a developer? We always need people to help us with:

- improving the **wording** of the application, drills, training programs, to make it easier to understand;
- drawing the **animations** of the drills in the app;
- **testing** the app;
- **gathering feedback** from our users;
- **processing the feedbacks** we get to decide which features should be implemented;

Feel free to contact us on [facebook](https://www.facebook.com/DiscInApp) or by email (ultimate.discin_at_gmail.com) to discuss it.

### Tests

We expect every code introduced via a pull-request to be tested.
We use [jest](https://jestjs.io/docs/en/tutorial-react-native) and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) as testing frameworks. Please refer to the documentation, look at [existing tests](https://github.com/disc-in/UltimateApp/blob/main/src/Components/DrillListPage.test.js) or ask questions if needed.

## Release

Note: You need to understand how environment variables are managed in an expo app. It is completely different from a web application because the app bundle is sent to every user. There is no such place as a safe server environment config.

- Environment variables in Expo https://docs.expo.dev/guides/environment-variables/
- Environment variables and secrets in the build process (EAS Build): https://docs.expo.dev/build-reference/variables/

Most of our environment variables are set directly in app.config.js. Our secrets (eg. API tokens) are set in the environment and on our Expo Account (so that EAS Build can access them).

To release a new version of the app :

1. Send a pull request updating the version in `app.config.js`. If new binaries must be built, this is a major version update and you must also update the buildNumber (ios) and versionCode (android)
2. When it is merged, create a release on Github
3. If you want to update an existing deployed build:

   1. Make sure your `.env` file contains the production environment variables up-to-date (especially APP_ENV)
   2. Make sure the secrets on our expo account are set
   3. Use `expo start --clear` to make sure the new env vars have been taken into account
   4. Then run `export $(cat .env | xargs) || eas update --branch production` (change the channel if staging). We manually load the .env variables because EAS Update does not use them by default.
   5. Set back your development env vars in `.env` and run `expo start --clear`

4. If you want to deploy new builds:
   1. Make sure the secrets on our expo account are set
   2. Rebuild to the stores using `eas build --platform <ios|android|all> --profile <profile-name>`
   3. Submit builds to the stores `eas submit -p ios` and `eas submit -p android`
   4. Follow store-specific instructions to deploy

## 🙏 Thanks

Thanks a lot to everyone helping `Disc In` become an awesome app!

- Every direct [contributor](https://github.com/disc-in/UltimateApp/graphs/contributors) to the code
- UX design: Martin VDD
- English wording: Scott Graber, Anja Hopma
- French dictionary: Cheikh F. Ndiaye
- Drills: Ine Lanckriet, Pierre Gruau
- Visual contents (photos): [Focus Ultimate France](https://www.facebook.com/ultifocus/)
- Alpha testing: Tiphaine Champetier, Ludovic Romano, Fred Risse, Edwin Grappin, Marie Collet, Hugues Andrieux, Vincent Peltre, Pablo, Lili Magerand, Quentin Siour, John Kofi, Guillaume Giroux, Théo Veaudor, Guillaume Tessier, Poupsy, Matt Hill, Quentin Walsh, Sarvani, Benjamin Bourdon, Elise Lefèbvre
- Videos: the PUC, Monkeys and Moustix players

## 📜 License

The app source code is made available under the [MIT license](LICENSE).
