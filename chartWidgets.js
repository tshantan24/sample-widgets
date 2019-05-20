// var chartScript = document.createElement('script');  
// chartScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js')
// document.head.appendChild(chartScript);

// var jQueryScript = document.createElement('script');  
// jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js')
// document.head.appendChild(jQueryScript);

// import ChartDataLabels from 'chartjs-plugin-datalabels';

styles = {
    outer: {
        'width': '600px',
        'height': '400px',
        // 'border': '1px solid black',
        'position': 'relative',
        '-webkit-box-shadow': '0px 5px 5px 0px rgba(196,196,196,1)',
        '-moz-box-shadow': '0px 5px 5px 0px rgba(196,196,196,1)',
        'box-shadow': '0px 5px 5px 0px rgba(196,196,196,1)',
        'left': 0,
        'right': 0,
        'margin': 'auto',
    },

    top: {
        'height': '20%',
        'margin': 'auto',
        // 'border': '1px solid red',
        'left': 0,
        'position': 'absolute',
        'right': 0,
        '-webkit-box-shadow': '0px 5px 5px 0px rgba(196,196,196,1)',
        '-moz-box-shadow': '0px 5px 5px 0px rgba(196,196,196,1)',
        'box-shadow': '0px 5px 5px 0px rgba(196,196,196,1)',
    },

    bottom: {
        'height': '78%',
        'margin': 'auto',
        // 'border': '1px solid blue',
        'left': 0,
        'right': 0,
        'position': 'absolute',
        'top': '22%',
        'margin': 'auto',
    },

    span1: {
        'font-size': '30px',
        'position': 'absolute',
        'display': 'inline-block',
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
        'margin': 'auto',
        'max-width': '100px',
        'height': '30px',
        'text-align': 'center',
    },

    faLeft: {
        'left': '10%',
        'background': 'none',
        'border': 'none',
        'position': 'absolute',
        'top': 0,
        'bottom': 0,
        'margin': 'auto',
        'display': 'inline-block',
    },

    faRight: {
        'right': '10%',
        'background': 'none',
        'border': 'none',
        'position': 'absolute',
        'top': 0,
        'bottom': 0,
        'margin': 'auto',
        'display': 'inline-block',
    },

    slides: {
        'display': 'none',
    },
}



class ChartWidget {

    constructor() {
        var outer = document.createElement('div');
        var top = document.createElement('div');
        var bottom = document.createElement('div');

        outer.setAttribute('class', 'outer');
        outer.setAttribute('id', 'outer');
        top.setAttribute('class', 'top');
        top.setAttribute('id', 'top');
        bottom.setAttribute('class', 'bottom');
        bottom.setAttribute('id', 'bottom');


        var topLeft = document.createElement('button');
        topLeft.setAttribute('id', 'left');
        topLeft.setAttribute('class', 'fas fa-chevron-circle-left fa-3x');

        var topSpan = document.createElement('span');
        topSpan.innerText = "Trends";
        topSpan.setAttribute('class', 'span1');
        topSpan.setAttribute('id', 'span');

        var topRight = document.createElement('button');
        topRight.setAttribute('id', 'right');
        topRight.setAttribute('class', 'fas fa-chevron-circle-right fa-3x');

        var bottomOne = document.createElement('div');
        bottomOne.setAttribute('id', 'one');
        bottomOne.setAttribute('class', 'one slides');

        var bottomTwo = document.createElement('div');
        bottomTwo.setAttribute('id', 'two');
        bottomTwo.setAttribute('class', 'two slides');

        var canvas1 = document.createElement('canvas');
        canvas1.setAttribute('id', 'chart1');

        var canvas2 = document.createElement('canvas');
        canvas2.setAttribute('id', 'chart2');

        bottomOne.appendChild(canvas1);
        bottomTwo.appendChild(canvas2);

        top.appendChild(topLeft);
        top.appendChild(topSpan);
        top.appendChild(topRight);

        bottom.appendChild(bottomOne);
        bottom.appendChild(bottomTwo);

        outer.appendChild(top);
        outer.appendChild(bottom);
        document.body.appendChild(outer);

        $('#outer').css(styles.outer);

        //Styles for top div tag
        $('#top').css(styles.top);

        //Styles for bottom div tag
        $('#bottom').css(styles.bottom);

        $('#left').css(styles.faLeft);
        $('#right').css(styles.faRight);
        $('#span').css(styles.span1);
        $('#one').css(styles.slides);
        $('#two').css(styles.slides);
        // $('#chart1').css(styles.canvas);
        // $('#chart2').css(styles.canvas);

    }

    drawChart1() {
        var ctx = document.getElementById('chart1').getContext('2d');

        var options = {
            tooltips: {
                enabled: false
            },
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value*100 / sum).toFixed(2)+"%";
                        return percentage;
                    },
                    color: '#fff',
                }
            }
        };

        var DoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Investor 1', 'Investor 2', 'Investor 3'],

                datasets: [{
                    data: [35, 35, 30],
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                    borderColor: "#fff"
                }]
            },
            options: options
        });


    }

    drawChart2() {
        var ctx = document.getElementById('chart2').getContext('2d');

        var BarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',	'Jun'], 
                
                datasets: [{
                    label: 'Investor 1',
                    data: [25, 50, 20, 30, 35, 60],
                    backgroundColor: '#3e95cd'
                }, 
                {
                    label: 'Investor 2',
                    data: [25, 20, 20, 30, 35, 30],
                    backgroundColor: '#8e5ea2'
                }, 
                {
                    label: 'Investor 3',
                    data: [50, 30, 60, 40, 30, 10],
                    backgroundColor: '#3cba9f'
                }]
            },
            options: {
                tooltips: {enabled: false},
                responsive: true,
                legend: {
                    position: 'right'
                },

                plugins: {
                    datalabels: {
                        color: '#fff',
                }},


                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        });
    }

}