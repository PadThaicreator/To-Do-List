import { Component, input , output } from '@angular/core';

@Component({
  selector: 'modal-template',
  imports: [],
  templateUrl: './modal-template.html',
  styleUrl: './modal-template.css',
})
export class ModalTemplate {
  isModelOpen = input.required<boolean>()
  isModalClose = output()

  close = () =>{
    this.isModalClose.emit()
  }
}
