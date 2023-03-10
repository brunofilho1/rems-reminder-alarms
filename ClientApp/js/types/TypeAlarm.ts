import { TypeTimePicker } from "./TypeTimePicker";

export type TypeAlarm = {
  title?: string;
  description?: string;
  time: TypeTimePicker;
  activated: boolean;
}