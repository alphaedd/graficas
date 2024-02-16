Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Valores de Censo por Factor Químico Presente en el Aire'
    },
    xAxis: {
        categories: ['NO2', 'NO', 'SO2', 'CO', 'CO2', 'O3']
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        column: {
            borderRadius: '25%'
        }
    },
    series: [{
        name: 'Aumento',
        data: [35, 20, 18, 21, 35, 27]
    }, {
        name: 'Posibles Errores',
        data: [4, 3, 4, 3, 4, 4]
    }, {
        name: 'Relacion Normal',
        data: [30, 15, 8, 18, 29, 19]
    }]
});