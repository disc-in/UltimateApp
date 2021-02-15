import 'dotenv/config';

export default {
  name: 'Disc In',
  description: 'Empowering Ultimate coaches to prepare appropriate trainings for their teams',
  slug: 'ultimate-app',
  privacy: 'public',
  platforms: ['ios', 'android', 'web'],
  version: '1.1.0',
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
    buildNumber: '1.1.0',
    supportsTablet: true,
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
    associatedDomains: [
      `applinks:${process.env.EXPO_FIREBASE_DOMAIN_URI.replace('https://', '')}`,
      `applinks:${process.env.EXPO_FIREBASE_URL_PREFIX.replace('https://', '')}`,
    ],
  },
  android: {
    package: 'com.discin.discin',
    versionCode: 5,
    permissions: [],
    intentFilters: [
      {
        action: 'VIEW',
        autoVerify: true,
        data: [
          {
            scheme: 'https',
            host: process.env.EXPO_FIREBASE_DOMAIN_URI.replace('https://', ''),
            pathPrefix: '/',
          },
          {
            scheme: 'https',
            host: process.env.EXPO_FIREBASE_URL_PREFIX.replace('https://', ''),
            pathPrefix: '/',
          },
        ],
        category: ['BROWSABLE', 'DEFAULT'],
      },
    ],
  },
};
