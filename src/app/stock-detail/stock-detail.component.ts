import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap, mergeMap } from 'rxjs/operators';
import { CompanyProfileService, ICompanyProfile } from '../services/company-profile.service';
import { IStockQuote, StockQuoteSearchService } from '../services/stock-quote-search.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent implements OnInit {
  public isLoading = true;

  public companyProfile: ICompanyProfile;
  public stockQuote: IStockQuote;
  private stockSymbol: string;
  constructor(
    private route: ActivatedRoute,
    private companyProfileService: CompanyProfileService,
    private stockQuoteSearch: StockQuoteSearchService,
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
        })

      ).subscribe(stockQuote => {
        this.stockQuote = stockQuote;
        this.isLoading = false;
      });
  }

}
