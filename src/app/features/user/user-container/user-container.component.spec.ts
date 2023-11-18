import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { UserContainerComponent } from './user-container.component';
import { UserService } from '../services/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UserContainerComponent', () => {
  let fixture: ComponentFixture<UserContainerComponent>;
  let comp: UserContainerComponent;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        UserContainerComponent
      ],
      providers: [UserService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContainerComponent);
    comp = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    userService.addUser({ name: 'New User' });
    fixture.detectChanges();
  });

  it('should add a user', (done) => {
    comp.users$.subscribe(users => {
      expect(users.length).toBe(1);
      done();
    });
  });

  it('should remove a user', (done) => {
    comp.handleRemoveUserButtonClicked(0)
    comp.users$.subscribe(users => {
      expect(users.length).toBe(0);
      done()
    });
  });
});
