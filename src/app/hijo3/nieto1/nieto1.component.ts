import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormGroupDirective, ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nieto1',
  templateUrl: './nieto1.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Nieto1Component),
      multi: true
    }
  ]
})
export class Nieto1Component implements OnInit {

  // declaramos variables
  public formNieto1: FormGroup = this.initForm();

  public onTouched: () => void = () => { };

  constructor(
    private parentForm: FormGroupDirective,
    private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    const form = this.controlContainer.control;
    if (!form['controls'].formNieto1) {
      this.parentForm.form.addControl('formNieto1', this.formNieto1);
    } else {
      this.formNieto1 = form['controls'].formNieto1;
    }
  }

  // inicializamos formulario reactivo
  public initForm() {
    return new FormGroup({
      apellido:  new FormControl(''),
      direccion: new FormControl(''),
    });
  }

  writeValue(val: any): void {
    val && this.formNieto1.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.formNieto1.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formNieto1.disable() : this.formNieto1.enable();
  }

}
