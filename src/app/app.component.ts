import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MaterialSample';
  newVersion = '';
  notes = '';
  isOffline = false;

  @ViewChild('dialog', { static: true })
  dialog!: TemplateRef<any>;

  constructor(private swUpdate: SwUpdate,
    private matDialog: MatDialog,
    private snackbar: MatSnackBar) { }

  async ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(async (versionEvent) => {
        if (versionEvent.type == 'VERSION_DETECTED') {
          this.newVersion = (versionEvent.version.appData as AppData).version;
          this.notes = (versionEvent.version.appData as AppData).notes;

          this.matDialog.open(this.dialog);
        }
      });

      this.swUpdate.unrecoverable.subscribe(versionEvent => {
        alert('Fehler beim Update: ' + versionEvent.reason);
      })

      await this.swUpdate.checkForUpdate();
    }
  }

  async updateServiceWorker() {
    await this.swUpdate.activateUpdate();
    window.location.reload();
  }

  @HostListener('window:online')
  onOnline() {
    this.isOffline = false;
    this.snackbar.open('Sie sind jetzt Online!', 'Okay', { duration: 3000 });
  }

  @HostListener('window:offline')
  onOffline() {
    this.isOffline = true;
    this.snackbar.open('Sie sind jetzt Offline!', 'Okay', { duration: 3000 });
  }
}

interface AppData {
  version: string;
  notes: string;
}