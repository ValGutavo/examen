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

