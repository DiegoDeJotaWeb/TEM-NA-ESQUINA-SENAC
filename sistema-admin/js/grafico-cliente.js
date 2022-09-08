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
        label: 'Quantidade de cliente',
        backgroundColor: '#0f1833',
        borderColor: '#0f1833',
        data: [0, 10, 5, 2, 20, 30, 45, 18, 32, 50, 36, 64],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};



const myChart = new Chart(
    document.getElementById('qtdClienteGrafico'),
    config
);