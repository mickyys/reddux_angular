import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from 'src/store/reducers/reducers';
import { environment } from 'src/environments/environment';

const ngrx_imports = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({stateKey : 'router'}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name : 'AngularChatNgrx',
    logOnly : environment.production
  })
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...ngrx_imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
