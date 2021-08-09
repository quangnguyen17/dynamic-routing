import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent],
  }).compileComponents();

  fixture = TestBed.createComponent(AppComponent);
  app = fixture.componentInstance;
});

describe('AppComponent', () => {
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dynamic-routing'`, () => {
    expect(app.title).toEqual('dynamic-routing');
  });

  it('should render .nav .title', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.nav .title');
    console.log('textContent:', titleElement?.textContent);

    expect(titleElement?.textContent).toContain('Highmark');
  });

  it('should render .nav .subtitle', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const subtitleElement = compiled.querySelector('.nav .subtitle');
    console.log('textContent:', subtitleElement?.textContent);

    expect(subtitleElement?.textContent).toContain('Dynamic Routing Demo App');
  });
});
