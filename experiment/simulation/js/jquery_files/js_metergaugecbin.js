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
                max: 2,
                intervals: [0.5, 1, 2],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });
});

//---------------------------------------------Metergauge2(emitter current)---------------------------------------------------//
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
                max: 35,
                intervals: [5, 15, 25, 35],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});


//---------------------------------------------Metergauge3(collector-base voltage)---------------------------------------------------//
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
var tabrowindex = 0, tabrowindex2 = 0;
var bf = 120, br = 0.3;
var k = 1.381, q = 1.602;
var ea = 5, js = 2;
var vt, is, ar, af, ies, ics;
var ifr, irl, iel;
var vbe, vbc;
var table, clmns, vlt, clmns1, vlt1;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function check() {

    vbe = document.getElementById("voltbe").value;
    vbc = document.getElementById("voltbc").value;

    vt = (((parseFloat(k) * Math.pow(10, -23)) * 300) / (parseFloat(q) * Math.pow(10, -19))).toPrecision(3);
    is = parseInt(ea) * parseFloat(js) * Math.pow(10, -10) * Math.pow(10, -6); //BJT saturation current in ampere
    ar = (parseFloat(br) / (1 + parseFloat(br))).toPrecision(4); //Large signal reverse current gain of CB configuration
    af = (parseInt(bf) / (1 + parseInt(bf))).toPrecision(4); //Large signal forward current gain of CB configuration

    ies = (parseFloat(is) / parseFloat(af)).toPrecision(4); //base-emitter saturation current in ampere
    ics = (parseFloat(is) / parseFloat(ar)).toPrecision(4); // base-collctor saturation current in ampere

    var ifr = (parseFloat(ies) * Math.exp((parseFloat(vbe) / parseFloat(vt)) - 1)).toPrecision(4); //in ampere ib
    var irl = (parseFloat(ics) * Math.exp((-parseInt(vbc) / parseFloat(vt)) - 1)).toPrecision(4); //in ampere ic
    var iel = (Math.abs(-parseFloat(ifr) + (parseFloat(ar) * parseFloat(irl)))) * 1000000; //in  micro ampere

    document.getElementById("ampe").value = iel.toPrecision(2);


//    if (vbe == "") {
//        Alert.render("Enter the Base-Emitter Volatge");
//       // document.getElementById("add").style.display = "none";
//    }
//    else if (vbc == "") {
//        Alert.render("Enter the Base-Collector Volatge");
//        document.getElementById("add").style.display = "none";
//    }
//    else {
//        document.getElementById("add").style.display = "block";
//    }


    s1[0] = parseFloat(document.getElementById('voltbe').value);
    plot3 = $.jqplot('chart1', [s1], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 2,
                intervals: [0.5, 1, 2],
                intervalColors: ['#66cc66', '#93b75f', '#E7E658', '#cc6666', '#579575']
            }
        }
    });

    s2[0] = parseFloat(document.getElementById('ampe').value);
    plot3 = $.jqplot('chart2', [s2], {
        grid: {
            background: "transparent"
        },
        seriesDefaults: {
            renderer: $.jqplot.MeterGaugeRenderer,
            rendererOptions: {
                min: 0,
                max: 35,
                intervals: [5, 15, 25, 35],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });

    s3[0] = parseFloat(document.getElementById('voltbc').value);
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
    vlt = clmns.innerHTML;
  
    if (document.getElementById("voltbc").value != ((document.getElementById("tbvbc1").value))) {
       // Alert.render("Make the Base-Collector Volatge Constant");
        //document.getElementById("add").style.display = "none";
        document.getElementById("voltbc").style.borderColor = "red";
        document.getElementById("demo").innerHTML="Make the Base-Collector Volatge Constant";
    }
    else if (vlt == document.getElementById("voltbe").value) {
        // document.getElementById("add").style.display = "none";
        //Alert.render("Change the Base-Emitter Voltage");
        document.getElementById("voltbe").style.borderColor = "red";
        document.getElementById("demo").innerHTML="Change the Base-Emitter Voltage";
    }
  
//    else {
//        document.getElementById("add").style.display = "block";
//    }

}