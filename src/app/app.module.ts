import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTitleComponent } from './components/create-title/create-title.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './Mobile/list/list.component';
import { TaskComponent } from './Mobile/task/task.component';
import { ApolloModule } from 'apollo-angular';

import { apolloProvider } from './apollo.config';
import { HeaderComponent } from './Final/header-footer/header/header.component';
import { FooterComponent } from './Final/header-footer/footer/footer.component';
import { TodoComponent } from './Final/Todo/todo/todo.component';
import { ChatComponent } from './Final/Chat/chat/chat.component';
import { ListComponent1 } from './Final/Todo/list/list.component';
import { LoginComponent1 } from './Final/userAuth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    CreateTitleComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    TodoComponent,
    ListComponent1,
    ChatComponent,
    LoginComponent1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ApolloModule
  ],
  providers: [apolloProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
