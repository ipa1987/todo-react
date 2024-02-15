import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  value?: Date | undefined;
  onChange?: (date: Date | undefined) => void;
}
