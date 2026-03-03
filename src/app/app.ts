import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatSortModule} from '@angular/material/sort';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {DocumentView} from './components/document-view/document-view';
import {CamosTestView} from './components/camos-test-view/camos-test-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSortModule, MatTabGroup, MatTab, DocumentView, CamosTestView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
