import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ComplitedSurveyComponent } from './user-account/complited-survey/complited-survey.component';
import { SuccessfulSurveysComponent } from './user-account/successful-surveys/successful-surveys.component';
import { NewQuestionComponent } from './user-account/new-question/new-question.component';
import { TopicsComponent } from './topics/topics.component';
import { PageForTopicsComponent } from './topics/page-for-topics/page-for-topics.component';
import { OneTopicComponent } from './topics/page-for-topics/one-topic/one-topic.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TabulationComponent } from './tabulation/tabulation.component';
import { SideNavComponent } from './welcome-page/side-nav/side-nav.component';
import { SpecialTabulationComponent } from './welcome-page/special-tabulation/special-tabulation.component';
import { WelcomeInfoComponent } from './welcome-page/welcome-info/welcome-info.component';
import { TemplateComponent } from './template/template.component';
import { BreadScrumComponent } from './bread-scrum/bread-scrum.component';
import { InfoComponent } from './topics/info/info.component';
import { PaginationComponent } from './topics/pagination/pagination.component';
import { RegistrationComponent } from './registration/registration.component';
import { LeftNavComponent } from './header/left-nav/left-nav.component';
import { AdminBlockComponent } from './user-account/admin-block/admin-block.component';
import { SurveyComponent } from './survey/survey.component';
import { UsersSurveysComponent } from './user-account/users-surveys/users-surveys.component';
import { SurveyTableComponent } from './template/survey-table/survey-table.component';
import { QuestionFromTheTopicComponent } from './user-account/question-from-the-topic/question-from-the-topic.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '' , component : WelcomePageComponent},
  {path: 'topics' , component : TopicsComponent},
  {path: 'registration' , component : RegistrationComponent},
  {path: 'user-account' , component : UserAccountComponent},
  {path: 'topics/template' , component : TemplateComponent},
  {path: 'survey' , component : SurveyComponent},
  // {path: '' , component : WelcomePageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UserAccountComponent,
    ComplitedSurveyComponent,
    SuccessfulSurveysComponent,
    NewQuestionComponent,
    TopicsComponent,
    PageForTopicsComponent,
    OneTopicComponent,
    WelcomePageComponent,
    TabulationComponent,
    SideNavComponent,
    SpecialTabulationComponent,
    WelcomeInfoComponent,
    TemplateComponent,
    BreadScrumComponent,
    InfoComponent,
    PaginationComponent,
    RegistrationComponent,
    LeftNavComponent,
    AdminBlockComponent,
    SurveyComponent,
    UsersSurveysComponent,
    SurveyTableComponent,
    QuestionFromTheTopicComponent,
  ],
  imports: [
    [NgbModule],
    [BrowserModule],
    [RouterModule.forRoot(appRoutes)],
    [ReactiveFormsModule],
    [FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewQuestionComponent]
})
export class AppModule { }
