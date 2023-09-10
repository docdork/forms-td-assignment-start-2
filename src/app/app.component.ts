import { Component, ViewChild } from "@angular/core";
import { Subscription } from "./subscription";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signUpForm: NgForm;
  subscriptionTypes = ["Basic", "Advanced", "Pro"];

  userData = {
    email: "",
    sub: "",
    password: "",
  };

  defaultSub = "Advanced";

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.userData.email = this.signUpForm.value.email;
    this.userData.sub = this.signUpForm.value.sub;
    this.userData.password = this.signUpForm.value.password;
  }
}
