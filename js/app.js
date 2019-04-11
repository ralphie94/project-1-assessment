const $add = $("#add")
const $minus = $("#subtract")
const $input = $("#box")
const $display = $("#display")

let currentValue = 0



$add.on("click", function(e) {
    e.preventDefault();
    $display.text(currentValue += parseInt($input.val()))

})

$minus.on("click", function(e) {
    e.preventDefault();
    $display.text(currentValue -= parseInt($input.val()))
})




