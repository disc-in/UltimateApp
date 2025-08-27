import 'dotenv/config';

const Config = {
  env: process.env.APP_ENV,
};

if (process.env.APP_ENV === 'development') {
  Config.firebaseDatabaseUrl = process.env.DEV_FIREBASE_DATABASE_URL;
} else if (process.env.APP_ENV === 'production') {
  Config.firebaseDatabaseUrl = process.env.PRODUCTION_FIREBASE_DATABASE_URL;
}

export default {
  expo: {
    name: 'Disc In',
    description: 'Empowering Ultimate coaches to prepare appropriate trainings for their teams',
    slug: 'ultimate-app',
    privacy: 'public',
    platforms: ['ios', 'android'],
    version: '2.1.0',
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
    newArchEnabled: true,
    ios: {
      bundleIdentifier: 'com.discin.discin',
      buildNumber: '2.1.0',
      supportsTablet: true,
      infoPlist: {
        CFBundleAllowMixedLocalizations: true,
      },
    },
    android: {
      package: 'com.discin.discin',
      versionCode: 10,
      permissions: [],
    },
    plugins: ['expo-localization', 'expo-audio'],
    extra: {
      eas: {
        projectId: 'e2242930-ad3a-4007-afc1-f9c47c174979',
      },
      ...Config,
    },
  },
};
