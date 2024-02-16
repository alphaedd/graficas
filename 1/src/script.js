// Data retrieved from https://www.vikjavev.no/ver/snjomengd

Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Calidad de Aire por Factor Quimico'
    },
    subtitle: {
        text: 'Periodo de Muestreo de Nov - Dic'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            // don't display the year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'dia'
        }
    },
    yAxis: {
        title: {
            text: 'Cantidad de Senso (PPB)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },

    plotOptions: {
        series: {
            marker: {
                symbol: 'circle',
                fillColor: '#FFFFFF',
                enabled: true,
                radius: 2.5,
                lineWidth: 1,
                lineColor: null
            }
        }
    },

    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
        {
            name: 'CO2',
            data: [
                [Date.UTC(2023, 11, 1), 0],
                [Date.UTC(2023, 11, 2), 0.35],
                [Date.UTC(2023, 11, 3), 0.35],
                [Date.UTC(2023, 11, 4), 0.33],
                [Date.UTC(2023, 11, 5), 0.53],
                [Date.UTC(2023, 12, 1), 0.62],
                [Date.UTC(2023, 12, 2), 0.6],
                [Date.UTC(2023, 12, 3), 0.69],
                [Date.UTC(2023, 12, 4), 0.67],
                [Date.UTC(2023, 12, 5), 0.65],
                [Date.UTC(2023, 12, 6), 0.66],
                [Date.UTC(2023, 12, 7), 0.66],
                [Date.UTC(2023, 12, 8), 0.61],
                [Date.UTC(2023, 12, 9), 0.6],
                [Date.UTC(2023, 12, 10), 0.69],
                [Date.UTC(2023, 12, 11), 0.66],
                [Date.UTC(2023, 12, 12), 0.75],
                [Date.UTC(2023, 12, 13), 0.76],
                [Date.UTC(2023, 12, 14), 0.75],
                [Date.UTC(2023, 12, 15), 0.69],
                [Date.UTC(2023, 12, 16), 0.82],
                [Date.UTC(2023, 12, 17), 0.86],
                [Date.UTC(2023, 12, 18), 0.81],
                [Date.UTC(2023, 12, 19), 1],
                [Date.UTC(2023, 12, 20), 1.15],
                [Date.UTC(2023, 12, 21), 1.35],
                [Date.UTC(2023, 12, 22), 1.26],
                [Date.UTC(2023, 12, 23), 1.18],
                [Date.UTC(2023, 12, 24), 1.14],
                [Date.UTC(2023, 12, 25), 1.04],
                [Date.UTC(2023, 12, 26), 1.06],
                [Date.UTC(2023, 12, 27), 1.05],
                [Date.UTC(2023, 12, 28), 1.03],
                [Date.UTC(2023, 12, 29), 1.01],
                [Date.UTC(2023, 12, 30), 0.98],
                [Date.UTC(2023, 12, 31), 0.94],
                [Date.UTC(2024, 1, 1), 0.8],
                [Date.UTC(2024, 1, 2), 0.61],
                [Date.UTC(2024, 1, 3), 0.43],
                [Date.UTC(2024, 1, 4), 0]
            ]
        },
        {
            name: 'NO2',
            data: [
                [Date.UTC(2023, 11, 1), 0],
                [Date.UTC(2023, 11, 2), 0.25],
                [Date.UTC(2023, 11, 3), 0.45],
                [Date.UTC(2023, 11, 4), 0.13],
                [Date.UTC(2023, 11, 5), 0.3],
                [Date.UTC(2023, 12, 1), 0.66],
                [Date.UTC(2023, 12, 2), 0.56],
                [Date.UTC(2023, 12, 3), 0.49],
                [Date.UTC(2023, 12, 4), 0.67],
                [Date.UTC(2023, 12, 5), 0.55],
                [Date.UTC(2023, 12, 6), 0.86],
                [Date.UTC(2023, 12, 7), 0.86],
                [Date.UTC(2023, 12, 8), 0.31],
                [Date.UTC(2023, 12, 9), 0.69],
                [Date.UTC(2023, 12, 10), 0.59],
                [Date.UTC(2023, 12, 11), 0.56],
                [Date.UTC(2023, 12, 12), 0.65],
                [Date.UTC(2023, 12, 13), 0.66],
                [Date.UTC(2023, 12, 14), 0.65],
                [Date.UTC(2023, 12, 15), 0.59],
                [Date.UTC(2023, 12, 16), 0.72],
                [Date.UTC(2023, 12, 17), 0.76],
                [Date.UTC(2023, 12, 18), 0.71],
                [Date.UTC(2023, 12, 19), 1],
                [Date.UTC(2023, 12, 20), 1.05],
                [Date.UTC(2023, 12, 21), 1.25],
                [Date.UTC(2023, 12, 22), 1.16],
                [Date.UTC(2023, 12, 23), 1.08],
                [Date.UTC(2023, 12, 24), 1.04],
                [Date.UTC(2023, 12, 25), 1.24],
                [Date.UTC(2023, 12, 26), 1.06],
                [Date.UTC(2023, 12, 27), 1.05],
                [Date.UTC(2023, 12, 28), 1.03],
                [Date.UTC(2023, 12, 29), 1.11],
                [Date.UTC(2023, 12, 30), 0.78],
                [Date.UTC(2023, 12, 31), 0.34],
                [Date.UTC(2024, 1, 1), 0.71],
                [Date.UTC(2024, 1, 2), 0.51],
                [Date.UTC(2024, 1, 3), 0.33],
                [Date.UTC(2024, 1, 4), 0]
            ]
        },
        {
            name: 'O3',
            data: [
                [Date.UTC(2023, 11, 1), 0],
                [Date.UTC(2023, 11, 2), 0.35],
                [Date.UTC(2023, 11, 3), 0.35],
                [Date.UTC(2023, 11, 4), 0.33],
                [Date.UTC(2023, 11, 5), 0.53],
                [Date.UTC(2023, 12, 1), 0.62],
                [Date.UTC(2023, 12, 2), 0.6],
                [Date.UTC(2023, 12, 3), 0.69],
                [Date.UTC(2023, 12, 4), 0.67],
                [Date.UTC(2023, 12, 5), 0.65],
                [Date.UTC(2023, 12, 6), 0.66],
                [Date.UTC(2023, 12, 7), 0.66],
                [Date.UTC(2023, 12, 8), 0.61],
                [Date.UTC(2023, 12, 9), 0.6],
                [Date.UTC(2023, 12, 10), 0.69],
                [Date.UTC(2023, 12, 11), 0.66],
                [Date.UTC(2023, 12, 12), 0.75],
                [Date.UTC(2023, 12, 13), 0.76],
                [Date.UTC(2023, 12, 14), 0.75],
                [Date.UTC(2023, 12, 15), 0.69],
                [Date.UTC(2023, 12, 16), 0.82],
                [Date.UTC(2023, 12, 17), 0.86],
                [Date.UTC(2023, 12, 18), 0.81],
                [Date.UTC(2023, 12, 19), 1],
                [Date.UTC(2023, 12, 20), 1.15],
                [Date.UTC(2023, 12, 21), 1.35],
                [Date.UTC(2023, 12, 22), 1.26],
                [Date.UTC(2023, 12, 23), 1.18],
                [Date.UTC(2023, 12, 24), 1.14],
                [Date.UTC(2023, 12, 25), 1.04],
                [Date.UTC(2023, 12, 26), 1.06],
                [Date.UTC(2023, 12, 27), 1.05],
                [Date.UTC(2023, 12, 28), 1.03],
                [Date.UTC(2023, 12, 29), 1.01],
                [Date.UTC(2023, 12, 30), 0.98],
                [Date.UTC(2023, 12, 31), 0.94],
                [Date.UTC(2024, 1, 1), 0.8],
                [Date.UTC(2024, 1, 2), 0.61],
                [Date.UTC(2024, 1, 3), 0.43],
                [Date.UTC(2024, 1, 4), 0]
            ]
        }
    ]
});
