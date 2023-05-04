import { en } from "@/lang/locales/en";
import store from "@/store";
import dayjs from "dayjs";

export {};

declare global {
  export type Language = typeof en;

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;

  type Genders = "male" | "female" | "other";
  type UnitSystem = "metric" | "imperial";

  export type BMIRecord = {
    id: number;
    sex: Genders;
    age: number;
    weight: number; // kg
    height: number; // cm
    date: dayjs.Dayjs;
  };

  export type BMIRawRecord = {
    sex: Genders;
    age: number;
    weight: string;
    height: string;
    unit: UnitSystem;
  };

  export type BMIDateRange = "all" | "weekly" | "monthly";

  type PathsToStringProps<T> = T extends string
    ? []
    : {
        [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
      }[Extract<keyof T, string>];

  type Join<T extends string[], D extends string> = T extends []
    ? never
    : T extends [infer F]
    ? F
    : T extends [infer F, ...infer R]
    ? F extends string
      ? `${F}${D}${Join<Extract<R, string[]>, D>}`
      : never
    : string;

  type DottedLanguageObjectStringPaths = Join<
    PathsToStringProps<Language>,
    "."
  >;
}
