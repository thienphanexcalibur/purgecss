import { Options } from "./types/";

export const defaultOptions: Options = {
  css: [],
  content: [],
  defaultExtractor: (content: string) => content.match(/[A-Za-z0-9_-]+/g) || [],
  extractors: [],
  fontFace: false,
  keyframes: false,
  rejected: false,
  stdin: false,
  stdout: false,
  variables: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: []
};
