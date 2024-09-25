import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LinkTooltipComponent } from './link-tooltip/link-tooltip.component';
import { EventExampleComponent } from './event-example/event-example.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ProfileComponent,
    UserProfileComponent,
    LinkTooltipComponent,
    EventExampleComponent,
    TwoWayBindingComponent,
    UserDisplayComponent,
    SignalCounterComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
