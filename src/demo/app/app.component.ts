import {Component} from '@angular/core'
import {LoggerService} from '@lernejaro/logger'

@Component({
  template: `
    <h1>Red</h1>
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      z-index: 1000;
      position: fixed;
      background-color: yellow;
    }
  `],
})
export class YellowModalComponent {
}

@Component({
  template: `
    <lrn-error>Some sample error content</lrn-error>
  `,
})
export class SampleErrorComponent {
}

@Component({
  template: `
    <lrn-warning>Some sample warning content</lrn-warning>
  `,
})
export class SampleWarningComponent {
}

@Component({
  selector: 'demo-app',
  template: `
    <button (click)="showError()">Error</button>
    <button (click)="showWarning()">Warning</button>
  `,
})
export class AppComponent {

  constructor(private logger: LoggerService) {
  }

  public showError() {
    this.logger.display(SampleErrorComponent)
  }

  public showWarning() {
    this.logger.display(SampleWarningComponent)
  }

}
