import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TareasEditarPage } from './tareas-editar.page';

describe('TareasEditarPage', () => {
  let component: TareasEditarPage;
  let fixture: ComponentFixture<TareasEditarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasEditarPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TareasEditarPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
