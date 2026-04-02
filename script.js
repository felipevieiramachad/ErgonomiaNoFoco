const ctx = document.getElementById('graficoTreemap');

new Chart(ctx, {
    type: 'treemap',
    data: {
        datasets: [{
            label: 'Afastamentos por tipo',

            tree: [
                { name: 'Dorsalgia', value: 20.6 },
                { name: 'Lesões do ombro', value: 16.7 },
                { name: 'Sinovite', value: 7.44 },
                { name: 'Mononeuropatias', value: 6.04 },
                { name: 'Discos', value: 4.96 },
                { name: 'Joelhos', value: 4.24 },
                { name: 'Transtornos', value: 4.20 },
                { name: 'Ansiedade', value: 4.17 },
                { name: 'Depressão', value: 3.68 },
                { name: 'Hérnia', value: 3.44 },
                { name: 'Articulações', value: 2.48 },
                { name: 'Outros', value: 8.57 }
            ],

            key: 'value',
            groups: ['name'],

            backgroundColor(ctx) {
                if (!ctx || !ctx.raw) return '#2b2b2b';

                const value = ctx.raw.v || 0;

                if (value > 15) return '#e54848'; // vermelho mais suave
                if (value > 8) return '#f2b705';  // amarelo mais elegante
                return '#3a3a3a'; // cinza mais claro (menos pesado)
            },

            borderWidth: 1,
            borderColor: '#1c1c1c',
            borderRadius: 6,
            spacing: 0.5,

            labels: {
                display: true,
                color: '#f1f1f1',
                font: function (ctx) {
                    const value = ctx.raw?.v || 0;

                    return {
                        size: value > 15 ? 18 : value > 8 ? 13 : 8,
                        weight: '600'
                    };
                },
                formatter(ctx) {
                    if (!ctx || !ctx.raw) return '';

                    return `${ctx.raw.g}\n${ctx.raw.v}%`;

                }
            },

            hoverBorderColor: '#ffffff',
            hoverBorderWidth: 1.5,
        }]
    },

    options: {

        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },

            tooltip: {
                backgroundColor: '#1a1a1a',
                titleColor: '#f5b400',
                bodyColor: '#fff',
                borderColor: '#333',
                borderWidth: 1,
                padding: 10,

                callbacks: {
                    title: (ctx) => ctx[0].raw?.g || '',
                    label: (ctx) => `${ctx.raw?.v || 0}% de afastamentos`
                }
            }
        }
    }
});
