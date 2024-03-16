// window.onload = () => {
//     componentsPath = 'vendor/components/';

//     document.childNodes[1].appendChild(document.createElement('script')).setAttribute('src', componentsPath.concat('header.js'));
// };

var converter = new htmltodom();

document.addEventListener('DOMContentLoaded', function () {
  if (config.product.indexExists === 'false') {
    console.log('Index does not exist');
  }

  var html = `<div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>ESP</h1>
        <p>ESP is a simple, easy to use, and powerful static site generator.</p>
      </div>
    </div>`;

    console.log(HTMLToDOM(html));
});

function download(data, filename, type) {
  var file = new Blob([data], { type: type });
  if (window.navigator.msSaveOrOpenBlob) // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
    var a = document.createElement("a"),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

function HTMLToDOM(html) {
  var data = {
      src: html,
  };
  var output = converter.convert(data);
  return output;
}