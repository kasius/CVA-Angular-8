import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormGroupDirective, ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Hijo2Component),
      multi: true
    }
  ]
})
export class Hijo2Component implements OnInit {

  // declaramos variables
  public formHijo2: FormGroup = this.initForm();

  public onTouched: () => void = () => { };

  constructor(
    private parentForm: FormGroupDirective,
    private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    const form = this.controlContainer.control;
    if (!form['controls'].formHijo2) {
      this.parentForm.form.addControl('formHijo2', this.formHijo2);
    } else {
      this.formHijo2 = form['controls'].formHijo2;
    }
  }

  // inicializamos formulario reactivo
  public initForm() {
    return new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      favoriteSport: new FormControl(''),
      profession: new FormControl('')
    });
  }

  writeValue(val: any): void {
    val && this.formHijo2.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.formHijo2.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formHijo2.disable() : this.formHijo2.enable();
  }

}
