import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  employeeName: string = "";
  empList: string[] = [];

  addEmployee() {
    this.empList.push(this.employeeName);
  }
}
