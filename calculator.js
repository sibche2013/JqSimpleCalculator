    $(document).ready(function () {
        setInterval(function () {
            var x = Number($("#x").val());
            var y = Number($("#y").val());
            //Get Selected Operator Value
            var operator = $("#operators option:selected").val();
            //Calculate & Print Result Of Calculation
            switch (operator) {
                case "+":
                    $(".res").text(x + y);
                    $(".operator").text($("#operators option:selected").text());
                    break;
                case "*":
                    $(".res").text(x * y);
                    $(".operator").text($("#operators option:selected").text());
                    break;
                case "-":
                    $(".res").text(x - y);
                    $(".operator").text($("#operators option:selected").text());
                    break;
                case "/":
                    $(".res").text(x / y);
                    $(".operator").text($("#operators option:selected").text());
                    break;
            }
            //Another Way For Calculator
            /*
             $(".res").html(eval($("#x").val() + $("#operators").val() + $("#y").val()))
             $(".operator").text($("#operators option:selected").text());
             */
        }, 1);
    })