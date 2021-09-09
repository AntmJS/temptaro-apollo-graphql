module.exports = {
  schema: './schema.graphql',
  documents: 'src/operations/*.graphql',
  extensions: {
    languageService: {
      useSchemaFileDefinitions: true,
    },
  },
}
