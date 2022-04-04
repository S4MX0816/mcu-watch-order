import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  isSignIn: boolean = true;
  state: boolean = false;
  isBtnClicked: boolean = false;
  registerForm!: FormGroup;
  signInForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    const formData = {
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    };
    this.registerForm = this.fb.group({
      ...formData,
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9.&'_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,12}$/
          ),
        ],
      ],
    });
    this.signInForm = this.fb.group(formData);
  }
  login() {
    this.authService.login(this.signInForm.value).subscribe(
      (res) => {
        alert(res.message);
      },
      (err) => {
        alert(err);
      }
    );
  }
  register() {
    this.authService.register(this.registerForm.value).subscribe(
      (res) => {
        alert(res.message);
      },
      (err) => {
        alert(err);
      }
    );
  }
}
