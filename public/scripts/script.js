// Get the list element and its child elements
var list = document.querySelector('.letramenu ul');
var items = list.children;

// Hide the entire list element if it has only one item
if (items.length <= 1) {
  document.querySelector('.letramenu').style.display = 'none';
	document.querySelector('.expand-btn').style.display = 'none';
	document.querySelector('.collapse-btn').style.display = 'none';
}

if (items.length <= 3) {
  document.querySelector('.expand-btn').style.display = 'none';
	document.querySelector('.collapse-btn').style.display = 'none';
}

// Hide all items after the third if there are more than three
if (items.length > 3) {
  for (var i = 3; i < items.length; i++) {
    items[i].style.display = 'none';
  }
  document.querySelector('.expand-btn').style.display = 'flex';
	document.querySelector('.collapse-btn').style.display = 'none';
}

// Show the hidden items and hide the expand button
document.querySelector('.expand-btn').addEventListener('click', function() {
  for (var i = 3; i < items.length; i++) {
    items[i].style.display = 'block';
  }
  document.querySelector('.expand-btn').style.display = 'none';
  document.querySelector('.collapse-btn').style.display = 'flex';
});

// Hide the extra items and show the expand button
document.querySelector('.collapse-btn').addEventListener('click', function() {
  for (var i = 3; i < items.length; i++) {
    items[i].style.display = 'none';
  }
  document.querySelector('.expand-btn').style.display = 'flex';
  document.querySelector('.collapse-btn').style.display = 'none';
});
