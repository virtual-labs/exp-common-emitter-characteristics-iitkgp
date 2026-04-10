//---------------------------------------------Metergauge1(base-emitter voltage)----------------------------------------------//
$(document).ready(function () {
    s1 = [0];
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 20,
                intervals: [5, 10, 15, 20],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(base current)---------------------------------------------------//
$(document).ready(function () {
    s2 = [0];
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

//---------------------------------------------Metergauge3(collector current)---------------------------------------------------//
$(document).ready(function () {
    s3 = [0];
    plot3 = $.jqplot('chart3', [s3], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});
//---------------------------------------------Metergauge4(collector-emitter voltage)---------------------------------------------------//
$(document).ready(function () {
    s4 = [0];
    plot3 = $.jqplot('chart4', [s4], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});

var bf = 120, br = 0.3;
var k = 1.381, q = 1.602;
var ea = 5, js = 2;
var vt, is, ar, af, ies, ics;
var ifr, irl, iel;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function check() {

    vt = ((parseFloat(k) * Math.pow(10, -23)) * 300) / (parseFloat(q) * Math.pow(10, -19));
    is = parseInt(ea) * parseFloat(js) * Math.pow(10, -10); //BJT saturation current
    ar = parseFloat(br) / (1 + parseFloat(br)); //Large signal reverse current gain of CB configuration
    af = parseInt(bf) / (1 + parseFloat(bf)); //Large signal forward current gain of CB configuration
    ies = parseFloat(is) / parseFloat(af); //base-emitter saturation current
    ics = parseFloat(is) / parseFloat(ar); // base-collctor saturation current

    var ifr = parseFloat(ies) * Math.exp((vbe / parseFloat(vt)) - 1);
    var irl = parseFloat(ics) * Math.exp((parseInt(vbc) / parseFloat(vt)) - 1);
    var iel = Math.abs(-parseFloat(ifr) + (parseFloat(ar) * parseFloat(irl)));

    s1[0] = parseFloat(document.getElementById('volt').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 20,
                intervals: [5, 10, 15, 20],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('amps').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    s3[0] = parseFloat(document.getElementById('ampl').value);
    plot3 = $.jqplot('chart3', [s3], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
    s4[0] = parseFloat(document.getElementById('ampz').value);
    plot3 = $.jqplot('chart4', [s4], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 40,
                intervals: [10, 20, 30, 40],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });


    var table = document.getElementById("mytable");

    var columns = table.rows[1].cells[3];
//    var rest = columns.innerHTML;

    var clmns = table.rows[tabrowindex].cells[1];
    var vlt = clmns.innerHTML;

//    if (r == rest) {
//       // document.getElementById("add").style.display = "block";
//       //document.getElementById("res1").style.display = "none";
//        //document.getElementById("res1").disabled = true;
//    }
//    if (rs != rest) {
//        document.getElementById("add").style.display = "none";
//        Alert.render("Same resistance value required ");   
//    }


    if (vlt == document.getElementById("dc").value) {
        document.getElementById("add").style.display = "none";
        Alert.render("Change the DC voltage");
    }
    else {
        document.getElementById("add").style.display = "block";
    }

}