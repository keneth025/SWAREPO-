import { ValidatorFn } from '@angular/forms';

export const isNotString: ValidatorFn = (control) => {
  return (typeof control.value === 'string' && control.value.trim() !== '') ? {
    valueIsString: {
      value: control.value
    }
  } : null;
};
