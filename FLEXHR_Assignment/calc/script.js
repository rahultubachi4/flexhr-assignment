
function calculateBmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = ((weight * 10) / height)

    document.getElementById('heading').innerHTML = 'BMI Calculator Result Is:'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

    if (bmi <= 50) {
        document.getElementById('message').innerHTML = 'your weight is low!!'
    }
    else {
        document.getElementById('message').innerHTML = 'your weight is heigh!!'
    }
}

function reload() {
    window.location.reload()
}
