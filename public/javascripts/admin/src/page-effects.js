
rain.controller('digitCtrl', function ($scope) {
    $scope.filterModel="";
    $scope.dfilterModel = "";
    $scope.cfilterModel = "";
    $scope.digits = [
        { digit: '1' }, { digit: '2' }, { digit: '3' }, { digit: '4' }, { digit: '5' }, { digit: '6' }, { digit: '7' }, { digit: '8' }, { digit: '9' }, { digit: '10' }, { digit: '11' }, { digit: '12' }, { digit: '13' }, { digit: '14' }, { digit: '15' },
    ];
    $scope.print = function (num) {
        if (num==1) {return "X"}else if (num==2) {return "XX"}else if (num==3) {return "XXX"}else if (num==4) {return "XXXX"} else if (num==5) {return "XXXXX"}else if (num==6) {return "XXXXXX"}else if (num==7) {return "XXXXXXX"}
        else if (num==8) {return "XXXXXXXX"} else if (num==9) {return "XXXXXXXXX"} else if (num==10) {return "XXXXXXXXXX"} else if (num==11) {return "XXXXXXXXXXX"} else if (num==12) {return "XXXXXXXXXXXX"}
        else if (num==13) {return "XXXXXXXXXXXXX"} else if (num==14) {return "XXXXXXXXXXXXXX"} else if (num==15) {return "XXXXXXXXXXXXXXX"} else {return " "}
    }
});