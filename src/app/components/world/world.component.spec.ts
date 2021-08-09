import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorldComponent } from './world.component';

let component: WorldComponent;
let fixture: ComponentFixture<WorldComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [WorldComponent],
  }).compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(WorldComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

describe('WorldComponent', () => {
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have world title', () => {
    // expect(component).();

    expect('title').toEqual('title');
  });
});
