import path from "node:path";
import { Fluent } from "@moebius/fluent";

export const supportedLanguage = ["en", "uk"];

export type LanguageType = "en" | "uk";

export const fluent = new Fluent({});

fluent.addTranslation({
  locales: "en",
  filePath: [parseFile("en.ftl")],
  bundleOptions: {
    useIsolating: false,
  },
});

fluent.addTranslation({
  locales: "uk",
  filePath: [parseFile("uk.ftl")],
  bundleOptions: {
    useIsolating: false,
  },
});

function parseFile(filename = "") {
  return path.resolve(process.cwd(), "locales", filename);
}

export const isMultipleLocales = supportedLanguage.length > 1;
