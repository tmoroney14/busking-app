import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BuskersListComponent } from './buskers-list/buskers-list.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports:      [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'buskers', component: BuskersListComponent },
      { path: 'buskers/:buskerId', component: DetailsComponent },
      { path: 'toolbar', component: ToolbarComponent },
    ])
  ],

  declarations: [
    AppComponent,
    LogoComponent,
    ToolbarComponent,
    BuskersListComponent,
    HomeComponent,
    DetailsComponent,
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
