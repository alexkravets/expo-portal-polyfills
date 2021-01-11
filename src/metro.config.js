module.exports = {
  resolver: {
    resolverMainFields: ['react-native', 'browser', 'module', 'main'],
    extraNodeModules: {
      crypto: require.resolve('./node_modules/@kravc/expo-portal-polyfills/src/crypto')
    }
  }
}
