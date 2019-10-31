import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormControl, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-hijo3',
  templateUrl: './hijo3.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Hijo3Component),
      multi: true
    }
  ]
})
export class Hijo3Component implements OnInit {

  // declaramos variables
  public formHijo3: FormGroup = this.initForm();

  public onTouched: () => void = () => { };

  constructor(
    private parentForm: FormGroupDirective,
    private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    const form = this.controlContainer.control;
    if (!form['controls'].formHijo3) {
      this.parentForm.form.addControl('formHijo3', this.formHijo3);
    } else {
      this.formHijo3 = form['controls'].formHijo3;
    }
  }

  // inicializamos formulario reactivo
  public initForm() {
    return new FormGroup({
      name: new FormControl('')
    });
  }

  writeValue(val: any): void {
    val && this.formHijo3.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.formHijo3.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formHijo3.disable() : this.formHijo3.enable();
  }

}
