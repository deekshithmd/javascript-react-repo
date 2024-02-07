import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  debug: true,
  fallbackLng: "en",
  returnObjects: true,
});

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     debug: true,
//     fallbackLng: "en",
//     returnObjects: true,
//     resources: {
//       en: {
//         translation: {
//           greeting: "Hello, Welcome!",
//           description: {
//             line1: "hello, how are you, {{name}}",
//             line2: "how is your life going",
//           },
//         },
//       },
//       fr: {
//         translation: {
//           greeting: "Bonjour, bienvenue! ",
//           description: {
//             line1: "bonjour comment allez-vous, <1>{{name}}</1>",
//             line2: "comment va ta vie",
//           },
//         },
//       },
//       hi: {
//         translation: {
//           greeting: "नमस्ते, स्वागत है",
//           description: {
//             line1: "नमस्ते, आप कैसे हैं, <1>{{name}}</1>",
//             line2: "आपका जीवन कैसा चल रहा है",
//           },
//         },
//       },
//       ar: {
//         translation: {
//           greeting: "مرحبا أهلا وسهلا!",
//           description: {
//             line1: "<1>{{name}}</1> مرحبا، كيف حالك,",
//             line2: "كيف تسير حياتك؟",
//           },
//         },
//       },
//     },
//   });
