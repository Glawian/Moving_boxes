var infoBoxy = [InterMarcheInfo, CCCInfo, PepCoInfo, NeoNetInfo, MartesSportInfo, TXMInfo, KikInfo];
var x = [X, X1, X2, X3, X4, X5, X6];
var elements = [elementsInterMarche, elementsCCC, elementsPepCo, elementsNeoNet, elementsMartesSport, elementsTXM, elementsKik]

infoBoxy.forEach(function (item) {
    item.classList.add("disappear");
})

var InterMarche = document.getElementById("InterMarche");
var elementsInterMarche = [InterMarcheGora, InterMarchePrzod, InterMarcheBok];
InterMarche.addEventListener("click", moveUpInterMarche);

function moveUpInterMarche() {
    elementsCCC.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[1].classList.add("disappear");
    }})
    elementsPepCo.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[2].classList.add("disappear");
    }})
    elementsNeoNet.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[3].classList.add("disappear");
    }})
    elementsMartesSport.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[4].classList.add("disappear");
    }})
    elementsTXM.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[5].classList.add("disappear");
    }})
    elementsKik.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[6].classList.add("disappear");
    }})
    elementsInterMarche.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[0].classList.add("disappear");
        }
        else {
            item.classList.add("moveUp");
            item.classList.remove("moveDown");
            infoBoxy[0].classList.remove("disappear");
            
        }
    })
}

var CCC = document.getElementById("CCC");
var elementsCCC = [CCCGora, CCCPrzod, CCCBok];
CCC.addEventListener("click", moveUpCCC);

function moveUpCCC() {
    elementsInterMarche.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[0].classList.add("disappear");
    }})
    elementsPepCo.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[2].classList.add("disappear");
    }})
    elementsNeoNet.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[3].classList.add("disappear");
    }})
    elementsMartesSport.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[4].classList.add("disappear");
    }})
    elementsTXM.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[5].classList.add("disappear");
    }})
    elementsKik.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[6].classList.add("disappear");
    }})
    elementsCCC.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[1].classList.add("disappear");
        }
        else {
            item.classList.add("moveUp");
            item.classList.remove("moveDown");
            infoBoxy[1].classList.remove("disappear");
        }
    })
}

var PepCo = document.getElementById("PepCo");
var elementsPepCo = [PepCoGora, PepCoPrzod, PepCoBok];
PepCo.addEventListener("click", moveUpPepCo);

function moveUpPepCo() {
    elementsInterMarche.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[0].classList.add("disappear");
    }})
    elementsCCC.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[1].classList.add("disappear");
    }})
    elementsNeoNet.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[3].classList.add("disappear");
    }})
    elementsMartesSport.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[4].classList.add("disappear");
    }})
    elementsTXM.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[5].classList.add("disappear");
    }})
    elementsKik.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[6].classList.add("disappear");
    }})
    elementsPepCo.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[2].classList.add("disappear");
        }
        else {
            item.classList.add("moveUp");
            item.classList.remove("moveDown");
            infoBoxy[2].classList.remove("disappear");
        }
    })
}

var NeoNet = document.getElementById("NeoNet");
var elementsNeoNet = [NeoNetGora, NeoNetPrzod, NeoNetBok];
NeoNet.addEventListener("click", moveUpNeoNet);

function moveUpNeoNet() {
    elementsInterMarche.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[0].classList.add("disappear");
    }})
    elementsPepCo.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[2].classList.add("disappear");
    }})
    elementsCCC.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[1].classList.add("disappear");
    }})
    elementsMartesSport.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[4].classList.add("disappear");
    }})
    elementsTXM.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[5].classList.add("disappear");
    }})
    elementsKik.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[6].classList.add("disappear");
    }})
    elementsNeoNet.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[3].classList.add("disappear");
        }
        else {
            item.classList.add("moveUp");
            item.classList.remove("moveDown");
            infoBoxy[3].classList.remove("disappear");
        }
    })
}

var MartesSport = document.getElementById("MartesSport");
var elementsMartesSport = [MartesSportGora, MartesSportPrzod, MartesSportBok];
MartesSport.addEventListener("click", moveUpMartesSport);

function moveUpMartesSport() {
    elementsInterMarche.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[0].classList.add("disappear");
    }})
    elementsPepCo.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[2].classList.add("disappear");
    }})
    elementsNeoNet.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[3].classList.add("disappear");
    }})
    elementsCCC.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[1].classList.add("disappear");
    }})
    elementsTXM.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[5].classList.add("disappear");
    }})
    elementsKik.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[6].classList.add("disappear");
    }})
    elementsMartesSport.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[4].classList.add("disappear");
        }
        else {
            item.classList.add("moveUp");
            item.classList.remove("moveDown");
            infoBoxy[4].classList.remove("disappear");
        }
    })
}

var TXM = document.getElementById("TXM");
var elementsTXM = [TXMGora, TXMPrzod, TXMBok];
TXM.addEventListener("click", moveUpTXM);

function moveUpTXM() {
    elementsInterMarche.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[0].classList.add("disappear");
    }})
    elementsPepCo.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[2].classList.add("disappear");
    }})
    elementsNeoNet.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[3].classList.add("disappear");
    }})
    elementsMartesSport.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[4].classList.add("disappear");
    }})
    elementsCCC.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[1].classList.add("disappear");
    }})
    elementsKik.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[6].classList.add("disappear");
    }})
    elementsTXM.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[5].classList.add("disappear");
        }
        else {
            item.classList.add("moveUp");
            item.classList.remove("moveDown");
            infoBoxy[5].classList.remove("disappear");
        }
    })
}

var Kik = document.getElementById("Kik");
var elementsKik = [KikGora, KikPrzod, KikBok];
Kik.addEventListener("click", moveUpKik);

function moveUpKik() {
    elementsInterMarche.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[0].classList.add("disappear");
    }})
    elementsPepCo.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[2].classList.add("disappear");
    }})
    elementsNeoNet.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[3].classList.add("disappear");
    }})
    elementsMartesSport.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[4].classList.add("disappear");
    }})
    elementsTXM.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[5].classList.add("disappear");
    }})
    elementsCCC.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[1].classList.add("disappear");
    }})
    elementsKik.forEach(function (item) {
        if (item.classList.contains("moveUp")) {
            item.classList.remove("moveUp");
            item.classList.add("moveDown");
            infoBoxy[6].classList.add("disappear");
        }
        else {
            item.classList.add("moveUp");
            item.classList.remove("moveDown");
            infoBoxy[6].classList.remove("disappear");
        }
    })
}

x[0].addEventListener("click", function () {
    elementsInterMarche.forEach(function (item) {
        item.classList.remove("moveUp");
        item.classList.add("moveDown");
    })
    infoBoxy[0].classList.add("disappear");
})

x[1].addEventListener("click", function () {
    elementsCCC.forEach(function (item) {
        item.classList.remove("moveUp");
        item.classList.add("moveDown");
    })
    infoBoxy[1].classList.add("disappear");
})

x[2].addEventListener("click", function () {
    elementsPepCo.forEach(function (item) {
        item.classList.remove("moveUp");
        item.classList.add("moveDown");
    })
    infoBoxy[2].classList.add("disappear");
})

x[3].addEventListener("click", function () {
    elementsNeoNet.forEach(function (item) {
        item.classList.remove("moveUp");
        item.classList.add("moveDown");
    })
    infoBoxy[3].classList.add("disappear");
})

x[4].addEventListener("click", function () {
    elementsTXM.forEach(function (item) {
        item.classList.remove("moveUp");
        item.classList.add("moveDown");
    })
    infoBoxy[5].classList.add("disappear");
})

x[5].addEventListener("click", function () {
    elementsKik.forEach(function (item) {
        item.classList.remove("moveUp");
        item.classList.add("moveDown");
    })
    infoBoxy[6].classList.add("disappear");
})

x[6].addEventListener("click", function () {
    elementsMartesSport.forEach(function (item) {
        item.classList.remove("moveUp");
        item.classList.add("moveDown");
    })
    infoBoxy[4].classList.add("disappear");
})
