import 'reflect-metadata';
import '../polyfills';

import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';

// NG Translate
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatOptionModule, MatSelectModule, MatStepperModule
} from '@angular/material';
import {HomeModule} from './home/home.module';
import localeZh from '@angular/common/locales/zh-Hans';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import {Observable} from 'rxjs';
import {TranslateUniversalLoader} from './translate-universal-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// registerLocaleData(localeZh, 'zh-Hans');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    // {provide: LOCALE_ID, useValue: 'zh-Hans'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
