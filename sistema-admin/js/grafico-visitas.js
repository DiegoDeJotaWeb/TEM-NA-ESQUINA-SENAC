
        const labels = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'Quantidade de visitas',
                backgroundColor: '#0f1833',
                borderColor: '#0f1833',
                data: [30, 14, 7, 15, 10, 30, 43, 11, 39, 57, 31, 51],
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {}
        };



        const myChart = new Chart(
            document.getElementById('qtdvisitaGrafico'),
            config
        );
