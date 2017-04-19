import { FormGroup } from '@angular/forms/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';

  // Uncomment this line and import FormGroup
  // test: FormGroup;
}
