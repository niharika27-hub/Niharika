import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FloatingDockComponent, DockItem } from '../utilities/floating-dock.component';
import { aboutData } from '../../data/portfolio-data';

@Component({
  selector: 'app-about-me',
  imports: [FloatingDockComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-me.component.html',
  styles: `
    .name-reveal {
      position: relative;
      display: inline-block;
      color: #141414;
      -webkit-text-stroke: 1.2px #8f8f8f;
      text-shadow: 0 0 12px rgba(192, 192, 192, 0.16);
      background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 40%, #a8a8a8 60%, #d4d4d4 100%);
      background-clip: text;
      -webkit-background-clip: text;
      background-size: 0% 100%;
      background-repeat: no-repeat;
      background-position: left center;
      transition: background-size 0.6s cubic-bezier(0.77, 0, 0.175, 1);
      cursor: default;
    }

    .name-reveal::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(180deg, #dfdfdf 0%, #b5b5b5 100%);
      transition: left 0.6s cubic-bezier(0.77, 0, 0.175, 1);
      pointer-events: none;
    }

    @media (hover: hover) {
      .name-reveal:hover {
        color: transparent;
        -webkit-text-stroke-color: transparent;
        background-size: 100% 100%;
      }

      .name-reveal:hover::after {
        left: 100%;
      }
    }

    @media (hover: none) {
      .name-reveal {
        color: transparent;
        -webkit-text-stroke-color: transparent;
        background-size: 100% 100%;
      }

      .name-reveal::after {
        display: none;
      }
    }
  `,
})
export class AboutMeComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly greeting = signal('Good evening');
  protected readonly resumeUrl = aboutData.resumeUrl;
  protected readonly socialLinks = signal<DockItem[]>(aboutData.socialLinks);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateGreeting();
    }
  }

  private updateGreeting(): void {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      this.greeting.set('Good morning');
    } else if (hour >= 12 && hour < 17) {
      this.greeting.set('Good afternoon');
    } else {
      this.greeting.set('Good evening');
    }
  }
}
