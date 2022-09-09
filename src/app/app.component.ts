import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MaterialSample';

  constructor(private swUpdate: SwUpdate){}

  ngOnInit() {
    if(this.swUpdate.isEnabled){
      this.swUpdate.versionUpdates.subscribe(async (version)=>{
        if(version.type == 'VERSION_DETECTED'){
          await this.swUpdate.activateUpdate();
          window.location.reload();
        }        
      });
    }
  }
}
