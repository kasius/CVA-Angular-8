import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormGroupDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: []
})
export class PadreComponent implements OnInit {

  // declarar variables
  public formFather: FormGroup;

  constructor(
  ) { }

  ngOnInit() {
    this.initForm();
  }

  // inicializamos formulario reactivo
  public initForm() {
    this.formFather =  new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      nickName: new FormControl(''),
    });
  }

}
