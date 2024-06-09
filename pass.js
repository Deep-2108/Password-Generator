document.addEventListener('DOMContentLoaded', (event) => {
    const rangeSlider = document.querySelector('.password_slider_main');
    const rangeValue = document.querySelector('.password_length_show');
    function updateSliderBackground(value) {
        const percentage = (value / rangeSlider.max) * 100;
        rangeSlider.style.background = `linear-gradient(to right, #514CAF ${percentage}%, #ddd ${percentage}%)`;
    }
    rangeSlider.addEventListener('input', function() {
        rangeValue.textContent = this.value;
        updateSliderBackground(this.value);
    });

    updateSliderBackground(rangeSlider.value);
});
function buttonA() {
    var activeButton = document.querySelector(".button");
    activeButton.classList.add("newclass");
    setTimeout(function() {
      activeButton.classList.remove("newclass");
    }, 100);
  }
  const rangeSlide = document.querySelector('.password_slider_main');
        if(rangeSlide.value<6)document.querySelector(".Strength_circle").classList.add("red");
        else if(rangeSlide.value>6&&rangeSlide.value<11)document.querySelector(".Strength_circle").classList.add("orange");
        else document.querySelector(".Strength_circle").classList.add("green");

 