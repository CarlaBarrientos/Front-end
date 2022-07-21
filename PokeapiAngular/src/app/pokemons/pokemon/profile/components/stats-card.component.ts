import { getLocaleDateFormat } from '@angular/common';
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
    values: { value: number, itemStyle: { color: string } }[] = [];

    chartOption: EChartsOption = {}

    constructor() {

    }
    ngOnInit(): void {
        this.fillChartWithStats();
    }

    fillChartWithStats() {
        this.pokemonStats.forEach((stat: { base_stat: number, stat: { name: string } }) => {
            this.categories.push(stat.stat.name);
            this.values.push({
                value: stat.base_stat,
                itemStyle: {
                    color: this.getColor(stat.base_stat)
                }
            });
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

    getColor(value: number) {
        if(value > 0 && value < 25) {
            return '#CD6155';
        } else if(value > 24 && value < 50) {
            return '#F5B041';
        } else if(value > 49 && value < 75) {
            return '#F4D03F';
        } else {
            return '#58D68D'
        }
    }

}