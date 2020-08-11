import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-root',
  templateUrl: './login-root.component.html',
  styleUrls: ['./login-root.component.scss']
})
export class LoginRootComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.navigate(['login'], {relativeTo: this.route});
  }
}
