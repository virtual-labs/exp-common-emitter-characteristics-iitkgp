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


//---------------------------------------------Metergauge3(collector-emitter voltage)---------------------------------------------------//
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
var vbe, vce;
var ifr, irl, ibl, vbc;
var table, clmns, vltbe, tabrowindex, clmns1, vltbe1;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function check() {

    vbe = document.getElementById("voltbe").value;
    vce = document.getElementById("voltce").value;

    vt = (((parseFloat(k) * Math.pow(10, -23)) * 300) / (parseFloat(q) * Math.pow(10, -19))).toPrecision(3);
    is = parseInt(ea) * parseFloat(js) * Math.pow(10, -10) * Math.pow(10, -6); //BJT saturation current in ampere
    ar = (parseFloat(br) / (1 + parseFloat(br))).toPrecision(4); //Large signal reverse current gain of CB configuration
    af = (parseInt(bf) / (1 + parseFloat(bf))).toPrecision(4); //Large signal forward current gain of CB configuration
    ies = (parseFloat(is) / parseFloat(af)).toPrecision(4); //base-emitter saturation current in ampere
    ics = (parseFloat(is) / parseFloat(ar)).toPrecision(4); // base-collctor saturation current in ampere

    ifr = (parseFloat(ies) * Math.exp((parseFloat(vbe) / parseFloat(vt)) - 1)).toPrecision(4); //in ampere
    vbc = (parseFloat(vbe) - parseInt(vce)).toPrecision(4);
    irl = (parseFloat(ics) * Math.exp((parseFloat(vbc) / parseFloat(vt)) - 1)).toPrecision(4); //in ampere
    ibl = (Math.abs(((1 - parseFloat(af)) * parseFloat(ifr)) + ((1 - parseFloat(ar)) * parseFloat(irl)))) * 1000;// in mili ampere

    document.getElementById("ampb").value = ibl.toPrecision(4);

//    if (vbe == "") {
//        Alert.render("Enter the Base-Emitter Voltage");
//        //document.getElementById("add").style.display = "none";
//    }
//    else if (vce == "") {
//        Alert.render("Enter the Collector-Emitter Voltage");
//       // document.getElementById("add").style.display = "none";
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

    s2[0] = parseFloat(document.getElementById('ampb').value);
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


    s3[0] = parseFloat(document.getElementById('voltce').value);
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
//
//var columns = table.rows[1].cells[3];
//
    clmns = table.rows[tabrowindex + 1].cells[1];
    vltbe = clmns.innerHTML;
//    clmns1 = table.rows[tabrowindex2 + 1].cells[3];
//    vltbe1 = clmns1.innerHTML;
    
    if (document.getElementById("voltce").value != ((document.getElementById("tbvce1").value))) {//||(document.getElementById("tbvce2").value)
        //Alert.render("Make the Collector-Emitter Volatge Constant");
//        document.getElementById("add").style.display = "none";
document.getElementById("voltce").style.borderColor="red";
document.getElementById("demo").innerHTML="Make the Collector-Emitter<br> Voltage Constant";
    }
    else if (vltbe == document.getElementById("voltbe").value) {
        //document.getElementById("add").style.display = "none";
        //Alert.render("Change the Base-Emitter Voltage");
        document.getElementById("voltbe").style.borderColor="red";
document.getElementById("demo").innerHTML="Change the Base-Emitter Voltage";
    }
   
//    else if (vltbe1 == document.getElementById("voltbe").value) {
//        //Alert.render("Change the Base-Emitter Voltage");
//   document.getElementById("voltbe").style.borderColor="red";
//document.getElementById("demo").innerHTML="Change the Base-Emitter Voltage";
//    }
//    else {
//        document.getElementById("add").style.display = "block";
//    }

}