//---------------------------------------------Metergauge1(base-emitter voltage)----------------------------------------------//
//$(document).ready(function () {
//    s1 = [0];
//    plot3 = $.jqplot('chart1', [s1], {
//        grid: {
//            background: "transparent"
//        },
//        seriesDefaults: {
//            renderer: $.jqplot.MeterGaugeRenderer,
//            rendererOptions: {
//                min: 0,
//                max: 2,
//                intervals: [0.5, 1, 2],
//                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
//            }
//        }
//    });
//});

//---------------------------------------------Metergauge1(basecurrent)---------------------------------------------------//
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
                max: 10,
                intervals: [2, 4, 6, 10],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});


//---------------------------------------------Metergauge2(collector-emitter voltage)---------------------------------------------------//
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
                max: 1,
                intervals: [0, 1],
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
                max: 10,
                intervals: [2, 4, 6, 10],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});


var bf = 120, br = 0.3;
var k = 1.381, q = 1.602;
var ea = 5, js = 2;
var vt, is, ar, af, ies, ics;
var vbe, vce, ib, ic;
var table, tabrowindex, tabrowindex2;
var clmns, vltce, clmns1, vltce1;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function check() {


    vce = document.getElementById("voltce").value;
    ib = document.getElementById("ampb").value; //Mili ampere
    ibl = parseInt(ib) / 1000; // in Ampere

    vt = (((parseFloat(k) * Math.pow(10, -23)) * 300) / (parseFloat(q) * Math.pow(10, -19))).toPrecision(3);
    is = (parseInt(ea) * parseFloat(js) * Math.pow(10, -10)) * Math.pow(10, -6); //BJT saturation current in ampere

    ar = (parseFloat(br) / (1 + parseFloat(br))).toPrecision(4); //Large signal reverse current gain of CB configuration
    af = (parseInt(bf) / (1 + parseInt(bf))).toPrecision(4); //Large signal forward current gain of CB configuration

    ies = (parseFloat(is) / parseFloat(af)).toPrecision(4); //base-emitter saturation current in ampere
    ics = (parseFloat(is) / parseFloat(ar)).toPrecision(4); // base-collctor saturation current in ampere


    ib0 = (((1 - parseFloat(af)) * parseFloat(ies)) + ((1 - parseFloat(ar)) * parseFloat(ics))).toPrecision(3);
    ib1 = (((1 - parseFloat(af)) * parseFloat(ies)) + ((1 - parseFloat(ar)) * parseFloat(ics) * Math.exp(-parseFloat(vce) / parseFloat(vt)))).toPrecision(3);
    ic = (((parseFloat(af) * parseFloat(ies)) - (parseFloat(ics) * Math.exp(-parseFloat(vce) / parseFloat(vt)))) * ((parseFloat(ibl) + parseFloat(ib0)) / parseFloat(ib1)) + parseFloat(ics) - parseFloat(af) * parseFloat(ies)) * 1000;

    document.getElementById("ampc").value = ic.toPrecision(3); // in mili ampere

//var ie=parseFloat(ic)+parseFloat(ib);//mili Ampere
//var iel=parseFloat(ie)/1000; //ampere
// vbe = (Math.log(Math.abs((parseFloat(iel) - parseFloat(ar) * parseFloat(ics) * (Math.exp(-parseFloat(vbc) / parseFloat(vt)) - 1)) / (-1 * parseFloat(ies))) + 1) * parseFloat(vt));

//    if (ib == "") {
//        Alert.render("Enter the base Current");
//        document.getElementById("add").style.display = "none";
//    }
//    else if (vce == "") {
//        Alert.render("Enter the Base-Collector Volatge");
//        document.getElementById("add").style.display = "none";
//    }
////    else {
////        document.getElementById("add").style.display = "block";
////    }


//    s1[0] = parseFloat(document.getElementById('voltbe').value);
//    plot3 = $.jqplot('chart1', [s1], {
//        grid: {
//            background: "transparent"
//        },
//        seriesDefaults: {
//            renderer: $.jqplot.MeterGaugeRenderer,
//            rendererOptions: {
//                min: 0,
//                max: 2,
//                intervals: [0.5, 1, 2],
//                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
//            }
//        }
//    });

    s1[0] = parseFloat(document.getElementById('ampb').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 10,
                intervals: [2, 4, 6, 10],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('voltce').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 1,
                intervals: [0, 1],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
    s3[0] = parseFloat(document.getElementById('ampc').value);
    plot3 = $.jqplot('chart3', [s3], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 10,
                intervals: [2, 4, 6, 10],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    table = document.getElementById("mytable");

    clmns = table.rows[tabrowindex + 1].cells[1];
    vltce = clmns.innerHTML;

    if (document.getElementById("ampb").value != ((document.getElementById("tbib1").value) )) {
        // Alert.render("Make the Base Current Constant");
        // document.getElementById("add").style.display = "none";
        document.getElementById("ampb").style.borderColor = "red";
        document.getElementById("demo").innerHTML = "Make the Base Current Constant";
    }

    else if (vltce == document.getElementById("voltce").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Change the Collector-Emitter Voltage");
        document.getElementById("voltce").style.borderColor = "red";
        document.getElementById("demo").innrHTML = "Change the Collector-Emitter Voltage";
    }

//    else {
//        document.getElementById("add").style.display = "block";
//    }

}