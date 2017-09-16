import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {
  AppComponent,
  SampleErrorComponent,
  SampleWarningComponent,
  YellowModalComponent,
} from './app.component'
import {ModalModule} from '@lernejaro/modal'
import {LoggerModule} from '@lernejaro/logger'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(YellowModalComponent),
    LoggerModule,
  ],
  declarations: [
    AppComponent,
    YellowModalComponent,
    SampleErrorComponent,
    SampleWarningComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    YellowModalComponent,
    SampleErrorComponent,
    SampleWarningComponent,
  ],
})
export class AppModule {
}
