/**
 * This file was automatically generated by `scripts/generate-schema.js`
 * Do not edit this file manually. Any manual changes will be overwritten.
 */

export {};

declare global {
  namespace Schema {
    /**
     * Dardarr theme schema
     */
    export interface Theme {
      name: string;
      /**
       * Primary color of the theme
       */
      colors: {
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
        "950": string;
      };
    }
  }
}
