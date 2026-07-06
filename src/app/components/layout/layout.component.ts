import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutMeComponent } from '../about-me/about-me.component';
import { PersonalProjectsComponent } from '../personal-projects/personal-projects.component';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { EducationComponent } from '../education/education.component';
import { AchievementsComponent } from '../achievements/achievements.component';
import { GetInTouchComponent } from '../get-in-touch/get-in-touch.component';

@Component({
  selector: 'app-layout',
  imports: [
    AboutMeComponent,
    PersonalProjectsComponent,
    TechStackComponent,
    
    EducationComponent,
    AchievementsComponent,
    GetInTouchComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="home" class="w-full min-h-dvh pt-[70px]">
      <app-about-me />
      <app-personal-projects />
      <app-tech-stack />
      <app-education />
      <app-achievements />
      <app-get-in-touch />
    </div>
  `,
})
export class LayoutComponent {}
