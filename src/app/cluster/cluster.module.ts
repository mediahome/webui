import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClusterRoutingModule} from './cluster-routing.module';
import {ClusterComponent} from './cluster.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AddComponent} from './add/add.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ListComponent} from './list/list.component';
import {ChangeComponent} from './change/change.component';

const PAGES_COMPONENTS = [
  ClusterComponent,
  AddComponent,
  ListComponent,
  ChangeComponent,
  PageNotFoundComponent,
];

@NgModule({
  declarations: [...PAGES_COMPONENTS, ListComponent, ChangeComponent],
  imports: [
    CommonModule,
    ClusterRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    FlexLayoutModule,
  ]
})
export class ClusterModule {
}
