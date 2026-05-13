import { Component, model, output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss'],
  standalone: true,
  imports: [MatButton],
})
export class FilePickerComponent {
  uploadClick = output();

  file = model<File>();

  private readonly allowedMimeTypes = ['text/csv', 'application/vnd.ms-excel'];

  selectFile(files: FileList | null): void {
    if (!files?.length) {
      this.removeFile();
      return;
    }

    const file = files.item(0) as File;
    const hasCsvExtension = file.name.toLowerCase().endsWith('.csv');
    const hasCsvMimeType = this.allowedMimeTypes.includes(file.type);

    if (!hasCsvExtension && !hasCsvMimeType) {
      this.removeFile();
      return;
    }

    this.file.set(file);
  }

  removeFile(): void {
    this.file.set(undefined);
  }
}
