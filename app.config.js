import 'dotenv/config';

export default {
  name: 'Disc In',
  description: 'Empowering Ultimate coaches to prepare appropriate trainings for their teams',
  slug: 'ultimate-app',
  privacy: 'public',
  platforms: ['ios', 'android', 'web'],
  version: '1.3.0',
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
  ios: {
    bundleIdentifier: 'com.discin.discin',
    buildNumber: '1.2.1',
    supportsTablet: true,
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
    associatedDomains: [`applinks:${process.env.EXPO_FIREBASE_URL_PREFIX.replace('https://', '').replace(/\/$/, '')}`],
  },
  android: {
    package: 'com.discin.discin',
    versionCode: 7,
    permissions: [],
    intentFilters: [
      {
        action: 'VIEW',
        autoVerify: true,
        data: [
          {
            scheme: 'https',
            host: process.env.EXPO_FIREBASE_URL_PREFIX.replace('https://', '').replace(/\/$/, ''),
            pathPrefix: '/',
          },
        ],
        category: ['BROWSABLE', 'DEFAULT'],
      },
    ],
  },
};
