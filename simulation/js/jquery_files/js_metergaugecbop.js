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
                max: 10,
                intervals: [2, 4, 6, 10],
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
                min: -1,
                max: 1,
                intervals: [0, 1],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
});
//---------------------------------------------Metergauge4(collector current)---------------------------------------------------//
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
var ifr, irl, iel;
var vbe, vbc, ie, ic;
var table;
var clmns, vlt,clmns1, vlt1;
//---------------------------------------------------------Simulation--------------------------------------------------------------------------------//
function check() {


    vbc = document.getElementById("voltbc").value;
    ie = document.getElementById("ampe").value;// in mili amp
    iel = parseInt(ie) / 1000; // in Ampere
    vt = (((parseFloat(k) * Math.pow(10, -23)) * 300) / (parseFloat(q) * Math.pow(10, -19))).toPrecision(3);
    is = (parseInt(ea) * parseFloat(js) * Math.pow(10, -10)) * Math.pow(10, -6); //BJT saturation current in Ampere

    ar = (parseFloat(br) / (1 + parseFloat(br))).toPrecision(4); //Large signal reverse current gain of CB configuration
    af = (parseInt(bf) / (1 + parseInt(bf))).toPrecision(4); //Large signal forward current gain of CB configuration


    ies = (parseFloat(is) / parseFloat(af)).toPrecision(4); //base-emitter saturation current in Ampere
    ics = (parseFloat(is) / parseFloat(ar)).toPrecision(4); // base-collctor saturation current in Ampere

    vbe = (Math.log(Math.abs((parseFloat(iel) - parseFloat(ar) * parseFloat(ics) * (Math.exp(-parseFloat(vbc) / parseFloat(vt)) - 1)) / (-1 * parseFloat(ies))) + 1) * parseFloat(vt));
    ic = ((parseFloat(af) * parseFloat(ies) * (Math.exp(parseFloat(vbe) / parseFloat(vt)) - 1) - parseFloat(ics) * (Math.exp(-parseFloat(vbc) / parseFloat(vt)) - 1)))*1000; //in mili Ampere

    document.getElementById("voltbe").value = vbe.toPrecision(3);
    document.getElementById("ampc").value = ic.toPrecision(3);
//alert("vbe"+vbe);
//alert("ic"+ic);
//    if (ie == "") {
//        Alert.render("Enter the Emitter Current");
//        //document.getElementById("add").style.display = "none";
//    }
//    else if (vbc == "") {
//        Alert.render("Enter the Base-Collector Volatge");
//        //document.getElementById("add").style.display = "none";
//    }
////    else {
////        document.getElementById("add").style.display = "block";
////    }


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
                max: 10,
                intervals: [2, 4, 6, 10],
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
                min: -1,
                max: 1,
                intervals: [0, 1],
                intervalColors: ['#66cc66', '#cc6666', '#cc6666', '#E7E658']
            }
        }
    });
    s4[0] = parseFloat(document.getElementById('ampc').value);
    plot3 = $.jqplot('chart4', [s4], {
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
  
    if (document.getElementById("ampe").value !=((document.getElementById("tbie1").value ))) {
        //Alert.render("Make the Emitter Current Constant");
        //document.getElementById("add").style.display = "none";
        document.getElementById("ampe").style.borderColor="red";
        document.getElementById("demo").innerHTML="Make the Emitter Current Constant";
    }

    else if (vlt == document.getElementById("voltbc").value) {
       // document.getElementById("add").style.display = "none";
        //Alert.render("Change the Base-Collector Voltage");
        document.getElementById("voltbc").style.borderColor="red";
         document.getElementById("demo").innerHTML="Change the Base-Collector Voltage";
    }
    
//    else {
//        document.getElementById("add").style.display = "block";
//    }

}