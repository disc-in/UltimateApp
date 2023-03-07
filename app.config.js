import 'dotenv/config';

const Config = {
  env: process.env.APP_ENV,
};

if (process.env.APP_ENV === 'development') {
  Config.firebaseDatabaseUrl = process.env.DEV_FIREBASE_DATABASE_URL;
  Config.firebaseUrlPrefix = process.env.DEV_FIREBASE_URL_PREFIX;
} else if (process.env.APP_ENV === 'production') {
  Config.firebaseDatabaseUrl = process.env.PRODUCTION_FIREBASE_DATABASE_URL;
  Config.firebaseUrlPrefix = process.env.PRODUCTION_FIREBASE_URL_PREFIX;
}

export default {
  expo: {
    name: 'Disc In',
    description: 'Empowering Ultimate coaches to prepare appropriate trainings for their teams',
    slug: 'ultimate-app',
    privacy: 'public',
    platforms: ['ios', 'android'],
    version: '1.4.0',
    githubUrl: 'https://github.com/disc-in/UltimateApp',
    orientation: 'portrait',
    scheme: 'discin',
    primaryColor: '#2a9e91',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['assets/**/*'],
    updates: {
      url: 'https://u.expo.dev/e2242930-ad3a-4007-afc1-f9c47c174979',
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
    ios: {
      bundleIdentifier: 'com.discin.discin',
      buildNumber: '1.4.0',
      supportsTablet: true,
      infoPlist: {
        CFBundleAllowMixedLocalizations: true,
      },
      associatedDomains: [`applinks:${Config.firebaseUrlPrefix?.replace('https://', '').replace(/\/$/, '')}`],
    },
    android: {
      package: 'com.discin.discin',
      versionCode: 8,
      permissions: [],
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: Config.firebaseUrlPrefix?.replace('https://', '').replace(/\/$/, ''),
              pathPrefix: '/',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    plugins: ['expo-localization'],
    extra: {
      eas: {
        projectId: 'e2242930-ad3a-4007-afc1-f9c47c174979',
      },
      ...Config,
    },
  },
};
