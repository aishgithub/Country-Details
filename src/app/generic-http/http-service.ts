import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpService extends Http {

  constructor(private backend: ConnectionBackend,
    private defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }
  get(url: string, body, options?: RequestOptionsArgs): Observable<any> {
    return super.get(url, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  post(url: string, body: any, options?: RequestOptionsArgs, callback?: any): Observable<any> {
    let requestOptions = this.requestOptions(options);
    return super.post(url, body, requestOptions)
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        callback;
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    options.headers = new Headers({
      // 'Content-Type': 'application/json'
      //'X-Auth-Token': vendor.token
    });

    return options;
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  private onSuccess(res: Response): void {
  }

  private onError(error: any): void {
  }

  private onFinally(): void {
    this.afterRequest();
  }

  private afterRequest(): void {
  }

}
