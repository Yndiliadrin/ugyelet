import { FormGroup, FormControl } from '@angular/forms';

export function getAsdasdForm(): FormGroup {
    return new FormGroup({
      category: new FormControl(),
      text: new FormControl()
    });
}
