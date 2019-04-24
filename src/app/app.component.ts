import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public testService: TestService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      textData: ['', [Validators.required, Validators.maxLength(50)]],
      numberData: ['', [Validators.required, Validators.min(0), Validators.max(10000)]]
    });
  }

  get requestList() {
    return this.testService.requestList;
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.testService.login(this.registerForm.value).subscribe(data => {
      console.log(data);
    });
  }
}
