export default [
  {
    ignores: ["node_modules/**"], // Ignora node_modules
    languageOptions: {
      ecmaVersion: "latest",       // Define la versión de ECMAScript
      sourceType: "module",        // Define el tipo de módulo
      globals: {                   // Define variables globales para el entorno del navegador
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-extra-semi": "warn",
      "no-console": "off",
      "eqeqeq": "error",
      "curly": "error"
      // Agrega aquí otras reglas recomendadas de ESLint según sea necesario
    }
  }
];

