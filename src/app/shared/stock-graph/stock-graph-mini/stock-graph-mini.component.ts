// @ts-nocheck
import { Component, ElementRef, AfterViewInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { select } from 'd3-selection';
import { line } from 'd3-shape';
import { axisLeft, axisBottom } from 'd3-axis';
import { max, min } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';
import { timeFormat } from 'd3-time-format';

@Component({
  selector: 'app-stock-graph-mini',
  templateUrl: 'stock-graph-mini.component.html',
  styleUrls: ['stock-graph-mini.component.scss'],
})

export class StockGraphMiniComponent implements OnChanges {
  @Input() stockData;
  private nativeElement: HTMLDivElement;
  constructor(elem: ElementRef) {
    this.nativeElement = elem.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.stockData && !changes.stockData.isFirstChange()) {
      this.redraw();
    }
  }

  public redraw() {
    const firstChild = this.nativeElement.querySelector('svg').firstChild;
    if (firstChild) firstChild.remove();
    this.draw();
  }

  private draw() {
    const dataSet = this.stockData;
    const w = this.nativeElement.offsetWidth;
    const h = this.nativeElement.offsetHeight;
    const padding = 40;
    const svgElement = this.nativeElement.querySelector('svg');

    const formatTime = timeFormat('%b %Y');
    const dataset = dataSet.map(d => {
      return {
        date: new Date(d.date),
        open: +d.open,
        high: +d.high,
        close: +d.close,
      };
    });

    const xScale = scaleTime()
      .domain([
        min(dataset, d => d.date),
        max(dataset, d => d.date)
      ])
      .range([padding, w]);

    const yScale = scaleLinear()
      .domain([0, max(dataset, d => d.close)])
      .range([h - padding, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(10)
      .tickFormat(formatTime);

    const yAxis = axisLeft(yScale)
      .ticks(10);

    const lineCb = line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.close));


    const svg = select(svgElement)
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg.append('path')
      .datum(dataset)
      .attr('class', 'line')
      .attr('d', lineCb);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (h - padding) + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding + ',0)')
      .call(yAxis);

  }
}