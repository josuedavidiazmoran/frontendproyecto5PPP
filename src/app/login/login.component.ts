import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // form: any = {
  //   username: null,
  //   password: null
  // };
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private fb:FormBuilder) { }

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  formUsuario= this.fb.group({
    username:[''],
    password: [''],
  });
  
  

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    console.log(this.roles);
    this.setform();
  }
  setform(){
    this.formUsuario.setValue({
      username:'',
      password:'',
    })
  }

  onSubmit() {
    
    const modelLogin = this.formUsuario.getRawValue();

    console.log(" ver fomrulario ",modelLogin);

    this.authService.login(modelLogin.username, modelLogin.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.reloadPage();
        window.location.href = '/dashboard';
        console.log(" ver respuesta ",data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
      },
      err => {
        console.log("hubo error ");
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
