import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectService } from '../project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  project!: Project;
  subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.project = this.projectService.loadProjekts()[id];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
