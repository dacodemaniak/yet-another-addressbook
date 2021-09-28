import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  
  constructor(
    private router: Router,
    private signinService: SigninService
  ) { }

  ngOnInit(): void {
  }

  public go(): void {
    if (this.signinService.isLoggedIn().getValue()) {
      this.router.navigate(['add-address']);
    }
  }
}
