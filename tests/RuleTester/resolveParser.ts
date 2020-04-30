type ParserName = "espree" | "@typescript-eslint/parser";

// @see https://eslint.org/docs/user-guide/migrating-to-6.0.0#ruletester-now-requires-an-absolute-path-on-parser-option
export const resolveParser = (parserName: ParserName) =>
  require.resolve(parserName);
