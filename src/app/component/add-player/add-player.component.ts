import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', {static: true}) chipList;
  @ViewChild('resetPlayerForm', {static: true}) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  playerForm: FormGroup;
  subjectArray: Subject[] = [];
  // SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];
  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private playerApi: ApiService) { }

  ngOnInit(){
    this.submitAddForm();
  }
/* Reactive add form */
submitAddForm() {
  this.playerForm = this.fb.group({
    name: ['', [Validators.required]],
    rank: ['', [Validators.required]],
    score: ['', [Validators.required]],
    time: ['', [Validators.required]],
    favourite_game: [this.subjectArray],
    status: [this.subjectArray]
  })
}

//Dustin: configure the Add form below

// /* Add dynamic languages */
// add(event: MatChipInputEvent): void {
//   const input = event.input;
//   const value = event.value;
//   // Add language
//   if ((value || '').trim() && this.subjectArray.length < 5) {
//     this.subjectArray.push({ name: value.trim() })
//   }
//   // Reset the input value
//   if (input) {
//     input.value = '';
//   }
// }

// /* Remove dynamic languages */
// remove(subject: Subject): void {
//   const index = this.subjectArray.indexOf(subject);
//   if (index >= 0) {
//     this.subjectArray.splice(index, 1);
//   }
// }

// /* Date */
// formatDate(e) {
//   var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
//   this.studentForm.get('dob').setValue(convertDate, {
//     onlyself: true
//   })
// }

// /* Get errors */
// public handleError = (controlName: string, errorName: string) => {
//   return this.studentForm.controls[controlName].hasError(errorName);
// }

// /* Submit book */
// submitStudentForm() {
//   if (this.studentForm.valid) {
//     this.studentApi.AddStudent(this.studentForm.value).subscribe(res => {
//       this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
//     });
//   }
// }

// }

}
