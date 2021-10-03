import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: FormGroup | any;
  hide: boolean = true;

  ngOnInit(): void {
    this.data = new FormGroup({
      name: new FormControl("",[Validators.required]),
      age: new FormControl("",[
        Validators.required,
        Validators.pattern('^[0-9]{0,2}$')
      ]),
      date: new FormControl(""),
      email: new FormControl("",[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("",[
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  submit() {
    if (this.data.valid) {
      console.log(this.data.value);
    } 
  }
}
