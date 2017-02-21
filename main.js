function getRandomNumber(min, max) {
  return Math.floor(min + (Math.random() * max));
}

function createArray(size) {
  var array = [];
  for (var i = 0; i < size; i++) {
    array.push(getRandomNumber(1,100));
  }
  return array;
}

var array = createArray(100);
console.log(array);

function createListElement(number) {
  var li = document.createElement('li');
  li.innerHTML = number;
  return li;
}

function appendListElements(array) {
  var ul = document.getElementById('death');
  array.forEach(function(number) {
    var li = createListElement(number);
    ul.appendChild(li);
  });
}

appendListElements(array);
