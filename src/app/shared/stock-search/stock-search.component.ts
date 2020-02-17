import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StockSymbolSearchService } from 'src/app/services/stock-symbol-search.service';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {
  @Output() symbolSelected = new EventEmitter<string>();
  public selectedValue = null;
  public listOfOption: Array<{ symbol: string; name: string }> = [];
  public nzFilterOption = () => true;

  constructor(private stockSymbolSearchService: StockSymbolSearchService) { }

  ngOnInit(): void {
  }

  public search(value: string): void {
    this.stockSymbolSearchService.get(value).subscribe(result => {
      this.listOfOption = result;
    });
  }

  public valueSelected(event: string): void {
    this.symbolSelected.emit(event);
  }
}
