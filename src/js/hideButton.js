var isTammy = document.querySelector('.author_link .author').textContent.indexOf('Tammy');

if(!~isTammy) {
  document.querySelector('.mr-widget-body .js-merge-button').style.display = 'none';
};