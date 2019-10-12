import {TranslateLoader} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {readFileSync} from 'fs';

export class TranslateUniversalLoader implements TranslateLoader {
  private readonly prefix: string = 'i18n';
  private readonly suffix: string = '.json';
  private readonly lang: string;

  constructor(prefix: string = 'i18n', suffix: string = '.json') {
    this.suffix = suffix;
    this.prefix = prefix;
    this.lang = 'zh-Hans';
  }

  /**
   * Gets the translations from the server
   * @param lang
   * @returns Observable<any>
   */
  public getTranslation(lang: string): Observable<any> {
    return new Observable(observer => {
      observer.next(JSON.parse(readFileSync(`${this.prefix}/${this.lang}${this.suffix}`, 'utf8')));
      observer.complete();
    });
  }
}
