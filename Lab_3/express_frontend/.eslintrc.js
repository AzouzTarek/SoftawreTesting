module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      'cypress/globals': true
    },
    extends: [
      'react-app',
      'plugin:cypress/recommended'
    ],
    plugins: [
      'cypress'
    ],
    rules: {
      // Ajoute ici tes règles personnalisées si besoin
    }
  };
  