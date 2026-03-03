import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-camos-test-view',
  imports: [
    MatButton,
    MatInput,
    FormsModule,
    MatFormField,
    MatLabel
  ],
  templateUrl: './camos-test-view.html',
  styleUrl: './camos-test-view.css',
})
export class CamosTestView {

  camosHTMLPanelId: string = "DebugBrokerFrame";
  messageToCamos: string = "";

  callCamos() {
    let camosHTMLPanelIdCleaned = "#" + this.camosHTMLPanelId.trim();

    let messageResult = "Hello from the other side";
    if (this.messageToCamos !== "") {
      messageResult = this.messageToCamos;
    }
    console.log("Calling Camos when it is inside angular with ID", camosHTMLPanelIdCleaned, "and message: ", messageResult);
    (document.querySelector(camosHTMLPanelIdCleaned) as any)?.callHTMLClient(messageResult);
  }
  callCamosFromInside() {
    let messageResult = "Hello from angular";
    if (this.messageToCamos !== "") {
      messageResult = this.messageToCamos;
    }
    console.log("Calling Camos when angular is inside camos with message: ", messageResult);
    (window as any)?.callHTMLClient(messageResult);
  }
}
