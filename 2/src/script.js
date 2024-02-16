// Data retrieved from https://olympics.com/en/olympic-games/beijing-2022/medals
Highcharts.chart('container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Porcentajes por Nivel de Presencia por Factor Quimico',
        align: 'left'
    },
    subtitle: {
        text: 'Grafico Dona de Factores Quimicos',
        align: 'left'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Porcentaje %',
        data: [
            ['NO2', 84.1],
            ['NO', 19.4],
            ['S02', 16.2],
            ['CO', 13.8],
            ['CO2', 94.3],
            ['O3', 72],
                    ]
    }]
});
