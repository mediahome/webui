import {TranslateLoader} from '@ngx-translate/core';
import {Observable} from 'rxjs';
// import {readFileSync} from 'fs';
import * as fs from 'fs';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export class TranslateUniversalLoader implements TranslateLoader {
  private readonly prefix: string = './assets/i18n/';
  private readonly suffix: string = '.json';
  private readonly lang: string;

  constructor(prefix: string = './assets/i18n/', suffix: string = '.json') {
    this.prefix = prefix;
    this.suffix = suffix;
    this.lang = 'zh-Hans';
  }

  /**
   * Gets the translations from the server
   * @param lang
   * @returns Observable<any>
   */
  public getTranslation(lang: string): Observable<any> {
    //   return TranslateLoader.getTranslation(this.lang);
    return new Observable(observer => {
      observer.next(JSON.parse(fs.readFileSync(`${this.prefix}/${this.lang}${this.suffix}`, 'utf8')));
      observer.complete();
    });
  }
}
