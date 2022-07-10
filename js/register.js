var $tdTotalCourses = document.querySelector('.js-total-of-courses')
var $tdTotalOfHours = document.querySelector('.js-total-of-hours')
var $buttonConfirm = document.querySelector('.js-button-register')

var totalHours = 0
var totalCourses = 0

function addCourse(checkbox){
    if(checkbox.cheked){
        totalCourses++
        totalHours += parseInt(checkbox.value)
    }
    else{
        totalCourses--
        totalHours -= parseInt(checkbox.value)
    }
    $tdTotalCourses.textContent = totalCourses + 'curso(s)'
    $tdTotalOfHours.texdtContent = totalHours + 'h'
}
$buttonConfirm.onclick = confirmRegister
function confirmRegister(){
    if(totalCourses === 0){
        alert('Nenhum curso selecionado')
    }
    else{
        alert('Matricula Confirmada nos Cursos!')
        window.location.href= 'index.html'
    }
}