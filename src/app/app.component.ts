import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RouterModule]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }
  onSubmit() {
    this.router.navigate(['/dashbord']);
  }
}
