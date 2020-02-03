import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { tap, map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('frame', {static: true}) frame: ElementRef;
  public url: Observable<SafeUrl>;
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private util: UtilService) {
    this.util.openDialog();
  }

  public ngOnInit() {
    this.url = this.refresh$.pipe(
      switchMap(() => this.http.get("https://www.reddit.com/r/random", {responseType: 'text', observe: 'response'})),
      map(res => this.sanitizer.bypassSecurityTrustResourceUrl(res.url)),
    );
  }

  public refresh() {
    this.util.openDialog();
    this.refresh$.next(true);
  }

  public iframeLoadedCallBack() {
    this.util.closeDialog();
  }
}
