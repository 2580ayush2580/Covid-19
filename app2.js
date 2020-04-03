document.querySelector('.showcase2').style.display = 'none';
document.querySelector('#post').addEventListener('click', function() {
    document.querySelector('.showcase2').style.display = 'block';
    document.querySelector('.showcase1').style.display = 'none';
    // document.querySelector('#post').textContent = 25

})
document.querySelector('#again').addEventListener("click", function() {
    document.querySelector('.showcase2').style.display = 'none';
    document.querySelector('.showcase1').style.display = 'block';
    // document.querySelector('.logo').textContent = 25

})