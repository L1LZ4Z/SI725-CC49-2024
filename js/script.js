// Funcion de arranque. Asigna comportamientos de forma dinamica al HTML
(function(window) {
  // Carga el form principal
    
  // Comportamiento de botones de barra nav
  var boton_nav1 = document.getElementById('load-about-us');
  var boton_nav2 = document.getElementById('load-why-us');
  var boton_nav3 = document.getElementById('load-contact-us');
  
  // Event listener para botones
  boton_nav1.addEventListener('click', function(event) {
    event.preventDefault();
    fetch('snippets/snippet_about_us.html')
              .then(response => response.text())
              .then(data => {
                document.getElementById('main-content').innerHTML = data;
                loadDefaultForm();
              })
              .catch(error => {
                console.error('Error al cargar el contenido dinamico del formulario:', error);
              }); 
  });
  boton_nav2.addEventListener('click', function(event) {
      event.preventDefault();
      fetch('snippets/snippet_why_us.html')
                .then(response => response.text())
                .then(data => {
                  document.getElementById('main-content').innerHTML = data;
                })
                .catch(error => {
                  console.error('Error al cargar el contenido dinamico del formulario:', error);
                });
    });
        boton_nav3.addEventListener('click', function(event) {
    event.preventDefault();
    fetch('snippets/snippet_contact_us.html')
              .then(response => response.text())
              .then(data => {
                document.getElementById('main-content').innerHTML = data;
              })
              .catch(error => {
                console.error('Error al cargar el contenido dinamico del formulario:', error);
              });
  });
})(window);