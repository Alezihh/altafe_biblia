/// <reference types="vite/client" />

// Meta Pixel types
interface Window {
  fbq?: (
    command: "init" | "track" | "trackCustom",
    eventName?: string,
    eventData?: Record<string, any>
  ) => void;
  _fbq?: any;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly VITE_FACEBOOK_ACCESS_TOKEN?: string;
  }
}
