import {Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Alert} from "../models/interfaces/alert";

@Directive({
  selector: '[appToast]'
})
export class ToastDirective implements OnChanges {

  @Input() alert?: Alert;
  @HostBinding('class') class?: string;
  @HostBinding('style.display') display!: string;


  constructor(private el: ElementRef) {
    this.applyRequiredStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["alert"]) {
      this.onAlertChange();
    }
  }

  private onAlertChange() {
    (this.alert && (this.alert !== undefined)) ? this.showToast() : this.hideToast();
  }

  private showToast() {
    this.display = "block";
    this.class = (this.alert?.severity) ? `alert alert-${this.alert?.severity}` : "";
  }

  private hideToast() {
    this.display = "none";
  }


  private applyRequiredStyles() {
    const styles: Record<string, string> = {
      "position": "absolute",
      "top": "200px",
      "z-index": "9999",
      "text-align": "center",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "display": "none",
    }
    Object.keys(styles).forEach((styleProperty) => {
      this.el.nativeElement.style[styleProperty] = styles[styleProperty];
    })

  }

}
