import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', {static: true}) chipList;
  @ViewChild('resetPlayerForm', {static: true}) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  playerForm: FormGroup;
  subjectArray: Subject[] = [];

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private playerApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.playerApi.GetPlayer(id).subscribe(data => {
      console.log(data.subjects),
      this.subjectArray = data.subjects;
      this.playerForm = this.fb.group({
        player_name: [data.player_name, [Validators.required]],
        rank: [data.rank, [Validators.required]],
        score: [data.score, [Validators.required]],
        time: [data.time],
        favorite_game: [data.favourite_game, [Validators.required]],
        status: [data.status]
      });
    });
  }

  updateBookForm() {
    this.playerForm = this.fb.group({
      player_name: ['', [Validators.required]],
      rank: ['', [Validators.required]],
      score: ['', [Validators.required]],
      time: ['', [Validators.required]],
      favorite_game: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }

  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.playerForm.get('time').setValue(convertDate, {
      onlyself: true
    })
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.playerForm.controls[controlName].hasError(errorName);
  }

  updatePlayerForm() {
    console.log(this.playerForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.playerApi.UpdatePlayer(id, this.playerForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/players-list'))
      });
    }
  }
}
