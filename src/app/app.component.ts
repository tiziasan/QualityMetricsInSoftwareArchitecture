import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QualityMetricsInSoftwareArchitecture';

  display = true;
  displayAttributes = false;
  displayCluster = false;

  loadMetrics() {
    this.display = true;
    this.displayAttributes = false;

  }
  loadAttributes(){
    this.displayAttributes = true;
    this.display = false;

  }
  loadCluster(){
    this.displayCluster = true;
    this.displayAttributes = false;
    this.display = false;

  }

}
