// Clase que representa una parada en la ruta
class Parada {
  constructor(nombre) {
    this.nombre = nombre;       // Nombre de la parada
    this.anterior = null;       // Referencia a la parada anterior
    this.siguiente = null;      // Referencia a la parada siguiente
  }
}
// Clase que representa una ruta completa
class Ruta {
  constructor() {
    this.inicio = null;         // Primer nodo de la ruta
    this.fin = null;            // Último nodo de la ruta
    this.longitud = 0;          // Número total de paradas
    this.indicePorNombre = new Map(); // Mapa auxiliar para acceso rápido por nombre
  }
}
 // Inserta una parada al inicio de la ruta — O(1)
 insertarAlInicio(nombre) {
  const nueva = new Parada(nombre);
  if (!this.inicio) {
    this.inicio = this.fin = nueva;
  } else {
    nueva.siguiente = this.inicio;
    this.inicio.anterior = nueva;
    this.inicio = nueva;
  }
  this.indicePorNombre.set(nombre, nueva);
  this.longitud++;
}
// Inserta una parada al final de la ruta — O(1)
insertarAlFinal(nombre) {
  const nueva = new Parada(nombre);
  if (!this.fin) {
    this.inicio = this.fin = nueva;
  } else {
    nueva.anterior = this.fin;
    this.fin.siguiente = nueva;
    this.fin = nueva;
  }
  this.indicePorNombre.set(nombre, nueva);
  this.longitud++;
}
// Inserta una parada en una posición específica — O(n)
insertarEnPosicion(pos, nombre) {
  if (pos < 0 || pos > this.longitud) {
    console.error("Posición inválida");
    return;
  }
  if (pos === 0) return this.insertarAlInicio(nombre);
  if (pos === this.longitud) return this.insertarAlFinal(nombre);

  const nueva = new Parada(nombre);
  let actual = this.inicio;
  for (let i = 0; i < pos; i++) actual = actual.siguiente;

  const anterior = actual.anterior;
  anterior.siguiente = nueva;
  nueva.anterior = anterior;
  nueva.siguiente = actual;
  actual.anterior = nueva;

  this.indicePorNombre.set(nombre, nueva);
  this.longitud++;
}
