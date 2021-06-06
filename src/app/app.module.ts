import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsModule } from './views/jobs/jobs.module';
import api from './shared/services/demo-api';

// included for the demo api
// TODO: make conditional at build time when real api is added
async function initializeApp() {
  await api.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    JobsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
