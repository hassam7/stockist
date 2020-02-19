import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, mergeMap } from 'rxjs/operators';
import { CompanyProfileService, ICompanyProfile } from '../services/company-profile.service';
import { IStockQuote, StockQuoteSearchService } from '../services/stock-quote-search.service';
import { StockHistoricalPriceService, IHistoricalData } from '../services/stock-historical-price.service';
import { ISelectedData } from '../shared/stock-graph/stock-graph-mini/stock-graph-mini.component';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  public isLoading = true;

  public companyProfile: ICompanyProfile;
  public stockQuote: IStockQuote;
  public stockHistoricalPrice: IHistoricalData[];
  public stockSymbol: string;
  public selectedData: ISelectedData;
  constructor(
    private route: ActivatedRoute,
    private companyProfileService: CompanyProfileService,
    private stockQuoteSearch: StockQuoteSearchService,
    private stockHistoricalPriceService: StockHistoricalPriceService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.stockSymbol = params.get('symbol');
          this.isLoading = true;
          return this.companyProfileService.getCompanyProfile(this.stockSymbol);
        }),
        mergeMap(companyProfileData => {
          this.companyProfile = companyProfileData;
          return this.stockQuoteSearch.getQuote(this.stockSymbol);
        }),
        mergeMap(stockQuote => {
          this.stockQuote = stockQuote;;
          return this.stockHistoricalPriceService.get(this.stockSymbol);
        }),
      ).subscribe(historicalPrice => {
        this.stockHistoricalPrice = historicalPrice;
        this.isLoading = false;
      });
  }

  public onDataSelected(data: ISelectedData) {
    this.selectedData = data;
  }

}

