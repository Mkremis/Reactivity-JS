const Component = (function () {
  // Creamos el Constructor:
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };
  // Agregamos los metodos al prototipo del constructor del componenete:
  // Render UI:
  Constructor.prototype.render = function () {
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
    console.log(this.data);
  };
  // Actualizar el State en forma reactiva:
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    // console.log("this.data:", this.data);
    // console.log("setState:", obj);
    // console.log("getState:", getState());
    this.render();
  };
  // Metodo para obtener una copia inmutable del estado:
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data)); //structuredClone(this.data);
  };

  return Constructor;
})();
