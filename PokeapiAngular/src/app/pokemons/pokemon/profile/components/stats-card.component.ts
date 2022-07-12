import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
    selector: 'app-stats-card',
    templateUrl: './stats-card.component.html',
    styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {

    @Input()
    pokemonStats!: any;
    categories: string[] = [];
    values: number[] = [];

    chartOption: EChartsOption = {}

    constructor() {

    }
    ngOnInit(): void {
        this.fillChartWithStats();
    }

    fillChartWithStats() {
        this.pokemonStats.forEach((stat: { base_stat: number, stat: { name: string } }) => {
            this.categories.push(stat.stat.name);
            this.values.push(stat.base_stat);
        });
        this.chartOption = {
            xAxis: {
                type: 'category',
                data: this.categories,
                axisLabel: { interval: 0, rotate: 35 }
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: this.values,
                    type: 'bar',
                },
            ],
        };
    }

}