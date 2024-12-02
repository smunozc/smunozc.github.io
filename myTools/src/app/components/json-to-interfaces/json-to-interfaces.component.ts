import { JsonConverterService } from './../../services/json-converter.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { afterNextRender, AfterViewInit, Component, inject, Injector, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ObjectInterface } from '../../model/object-interface';

@Component({
  selector: 'json-to-interfaces',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './json-to-interfaces.component.html',
  styleUrl: './json-to-interfaces.component.scss'
})
export class JsonToInterfacesComponent implements AfterViewInit{

  private readonly _injector = inject(Injector);
  protected readonly jsonControl: FormControl<string> = new FormControl('', Validators.required);

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(protected readonly jsonConverterService: JsonConverterService) {}

  ngAfterViewInit(): void {
    afterNextRender(
      () => {
        this.autosize.resizeToFitContent(true);
      },
      {
        injector: this._injector,
      },
    );
  }

  submitJson() {
    this.jsonConverterService.convertJsonToInterface(this.jsonControl.value, 'MainInterface');
  }

}
