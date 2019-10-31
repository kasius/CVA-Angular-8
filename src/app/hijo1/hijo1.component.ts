import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormControl, FormGroupDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Hijo1Component),
      multi: true
    }
  ]
})
export class Hijo1Component implements OnInit {

  // declaramos variables
  public formHijo1: FormGroup = this.initForm();

  public onTouched: () => void = () => { };

  constructor(
    private parentForm: FormGroupDirective,
    private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    const form = this.controlContainer.control;
    if (!form['controls'].formHijo1) {
      this.parentForm.form.addControl('formHijo1', this.formHijo1);
    } else {
      this.formHijo1 = form['controls'].formHijo1;
    }
  }

  // inicializamos formulario reactivo
  public initForm() {
    return new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      favoriteSport: new FormControl('')
    });
  }

  writeValue(val: any): void {
    val && this.formHijo1.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.formHijo1.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formHijo1.disable() : this.formHijo1.enable();
  }

}
