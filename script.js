let discount = document.querySelector('.discount');
let slider = document.getElementById('slider');
let percentage = calcSliderProgress(slider.value);
let prices = [
  {
     pageviews: '10K',
     price: 8
  },
  {
     pageviews: '50K',
     price: 12
  },
  {
     pageviews: '100K',
     price: 16
  },
  {
     pageviews: '500K',
     price: 24
  },
  {
     pageviews: '1M',
     price: 36
  }
];
let onoffswitch = document.getElementById('myonoffswitch');
let pageViews = document.querySelector('.pageview-text');
let billing = document.querySelector('.price-number');

if(window.screen.width < 1440){
  discount.innerHTML = "-25%";
}
function calcSliderProgress(sliderValue) {
  //returns the progress of the rangeSlider input in % based on range.value
  return (sliderValue * 100 / (slider['max'] - slider['min']));
}
// Following statements will be used to update webkit-slider-runnable-track for CHROME and EDGE browsers
let sliderStyle = document.createElement('style');
document.head.append(sliderStyle);
function colorChromeSlider(rangeValue) {
  sliderStyle.innerHTML = `#slider::-webkit-slider-runnable-track {
    background: linear-gradient(to right, hsl(174, 77%, 80%) ${rangeValue}%, hsl(224, 65%, 95%) ${rangeValue}% 100%)}`;
}
colorChromeSlider(percentage);
slider.addEventListener('input', function (e) {
  colorChromeSlider(calcSliderProgress(e.target.value));
  showBilling(e.target.value);
})

function showBilling(arrayIndex) {
  let price = (onoffswitch.checked)? (prices[arrayIndex].price * 0.75) : prices[arrayIndex].price;
  billing.textContent = "$" + price.toFixed(2);
  pageViews.textContent = prices[arrayIndex].pageviews + ' pageviews';
}
onoffswitch.addEventListener('change', function (e) {
  showBilling(slider.value);
})

let button = document.getElementsByTagName('button')[0];
// To display a message when user clicks a button
button.addEventListener('click', function(e) {
  e.preventDefault();
  let form = button.parentNode;
  let message = document.createElement('h1');
  message.textContent = "Thank you for choosing us!";
  form.innerHTML = '';
  form.appendChild(message);
})