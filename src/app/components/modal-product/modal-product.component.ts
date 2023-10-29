import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent {

  @Input() product: Product | undefined;
  @Output() close: EventEmitter<string> = new EventEmitter<string>();

  closeModal() {
    this.close.emit('close');
  }
}
