import {Component, OnDestroy, OnInit} from '@angular/core';
import {Alert} from "./models/interfaces/alert";
import {SubSink} from "subsink";
import {DataStorageService} from "./services/data-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'football updates';
  alert?: Alert;
  private subSink: SubSink = new SubSink();

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.subSink.sink = this.dataStorageService.alert$.subscribe(alert => this.alert = alert);
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
