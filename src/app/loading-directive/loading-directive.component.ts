import { Component } from '@angular/core';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-loading-directive',
  templateUrl: './loading-directive.component.html',
  styleUrls: ['./loading-directive.component.css']
})
export class LoadingDirectiveComponent {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appLoading(loading: boolean) {
    if (loading && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!loading && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

}

