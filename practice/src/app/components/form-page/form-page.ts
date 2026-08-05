import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-page.html',
})
export class FormPage {
  private fb = inject(FormBuilder);

  protected orderForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
    ],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [this.ageValidator]],
    agreeToTerms: [true, Validators.requiredTrue],
  });

  protected submitted = false;

  get firstName() {
    return this.orderForm.get('firstName');
  }
  get lastName() {
    return this.orderForm.get('lastName');
  }
  get email() {
    return this.orderForm.get('email');
  }
  get age() {
    return this.orderForm.get('age');
  }
  get agreeToTerms() {
    return this.orderForm.get('agreeToTerms');
  }

  protected ageValidator(control: FormControl) {
    const val = control.value;
    if (val === null || val === '' || val === undefined) {
      return null;
    }
    const num = Number(val);
    if (isNaN(num) || num < 18 || num > 65) {
      return { ageRange: 'Возраст должен быть от 18 до 65 лет' };
    }
    return null;
  }

  protected onSubmit() {
    if (this.orderForm.valid) {
      console.log('Форма отправлена:', this.orderForm.value);
      this.orderForm.reset({ agreeToTerms: true });
      this.submitted = true;
      setTimeout(() => (this.submitted = false), 3000);
    }
  }
}
