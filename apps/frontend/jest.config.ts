/* eslint-disable */
export default {
    displayName: 'frontend',    
    coverageDirectory: '../../coverage/apps/frontend',
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
    snapshotSerializers: [
      'jest-preset-angular/build/serializers/no-ng-attributes',
      'jest-preset-angular/build/serializers/ng-snapshot',
      'jest-preset-angular/build/serializers/html-comment',
    ],
  };
  