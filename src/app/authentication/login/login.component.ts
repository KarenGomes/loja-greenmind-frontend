import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthenticationService } from '../../core/services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, HttpClientModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [ AuthenticationService]
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(private route: Router, private formBuilder: FormBuilder, private AuthService: AuthenticationService){
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, [
              Validators.required,
              Validators.email
            ]],
      senha: [null, [
              Validators.required,
              // Validators.minLength(6)
            ]]
    });
  }

  submitForm() {
    if(this.form.valid){
      this.AuthService.doLogin(this.form.value);
      this.route.navigate(["/home"]);
    }else {
      console.log(`formulário inválido`)
    }
  }
}
