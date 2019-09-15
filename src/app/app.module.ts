import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BuskersListComponent } from './buskers-list/buskers-list.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SafePipe } from './safe.pipe';



@NgModule({
  imports:      [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatRippleModule,
    MatSidenavModule,
    MatExpansionModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { animation: 'isLeft' } },
      { path: 'buskers', component: BuskersListComponent, data: { animation: '' } },
      { path: 'buskers/:buskerId', component: DetailsComponent, data: { animation: 'isRight' } },
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
    SafePipe,
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
