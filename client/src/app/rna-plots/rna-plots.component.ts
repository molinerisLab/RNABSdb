import { Component } from '@angular/core';
import { RnabsServiceService } from '../rnabs-service.service';
@Component({
  selector: 'app-rna-plots',
  templateUrl: './rna-plots.component.html',
  styleUrls: ['./rna-plots.component.css']
})
export class RNAPlotsComponent {
  constructor(private heroService: RnabsServiceService) {}
  ngOnInit(): void {}
  //Variables here

}
