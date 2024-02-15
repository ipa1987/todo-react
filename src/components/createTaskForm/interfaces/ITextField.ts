import { ChangeEvent } from 'react';
import { IDisabled } from './IDisabled';

export interface ITextField extends IDisabled {
  onChange?: (
    args: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
}
