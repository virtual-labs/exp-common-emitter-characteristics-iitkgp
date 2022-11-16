/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "Identify the terminals on this BJT, and also the type of BJT NPN or PNP<br/><p style=\"text-align:center\"><img src=\"image/bjtq1.png\" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": " BEC ", "correct": false},
                {"option": "CBE", "correct": true},
                {"option": "  CEB", "correct": false},
                {"option": " EBC", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Predict how all three transistor currents (IB, IC, and IE) will be affected as a result of the following fault<br/><p style=\"text-align:center\"><img src=\"image/bjtq2.png \" style=\"width:350px;height:200px\"></p>  ",
            "a": [
                {"option": "All three currents stop.", "correct":true},
                {"option": " Base current unchanged, collector current stops, emitter current decreases to value of base current (IE = IB). ", "correct": false},
                {"option": "All three currents greatly increase, transistor will likely overheat and fail. ", "correct": false},
                {"option": " Base current unchanged, collector current increases slightly (ideally will not change at all!), transistor dissipates more power in the form of heat (may overheat) ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "Predict how all three transistor currents (IB, IC, and IE) will be affected as a result of the following fault<br/><p style=\"text-align:center\"><img src=\"image/bjtq3.png \" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": " All three currents stop.", "correct": false},
                {"option": "Base current unchanged, collector current stops, emitter current decreases to value of base current (IE = IB) ", "correct":true},
                {"option": "All three currents greatly increase, transistor will likely overheat and fail.", "correct": false},
                {"option": " Base current unchanged, collector current increases slightly (ideally will not change at all!), transistor dissipates more power in the form of heat (may overheat)", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 4 - Multiple Choice, Single True Answer
            "q": "For what kind of amplifications can the active region of the common-emitter configuration be used? ",
            "a": [
                {"option": " Voltage", "correct": false},
                {"option": "Current", "correct":false},
                {"option": "Power", "correct": false},
                {"option": " All of the above", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 5 - Multiple Choice, Single True Answer
            "q": "How much is the base-to-emitter voltage of a transistor in the on state? ",
            "a": [
                {"option": "0 V", "correct": false},
                {"option": "0.7 V", "correct":true},
                {"option": "0.7 mV", "correct": false},
                {"option": " Undefined", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
       
    ]
};



