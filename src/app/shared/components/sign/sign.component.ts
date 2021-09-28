import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(
    private signinService: SigninService
  ) { }

  ngOnInit(): void {
    this.signinService.isLoggedIn()
      .subscribe((loginState: boolean) => {
        console.log(`User is ${loginState ? ' connecté' : 'non connecté'}`);
      })
  }

  public sign(): void {
    this.signinService.signin();
  }
}
