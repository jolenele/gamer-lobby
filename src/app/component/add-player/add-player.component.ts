import { Component, OnInit, ViewChild, NgZone, Router } from '@angular/core';
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
  constructor(
    public fb: FormBuilder,
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
  });
}

// Dustin: configure the Add form below
}
