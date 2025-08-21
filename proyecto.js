// Clase que representa una parada en la ruta
class Parada {
  constructor(nombre) {
    this.nombre = nombre;       // Nombre de la parada
    this.anterior = null;       // Referencia a la parada anterior
    this.siguiente = null;      // Referencia a la parada siguiente
  }
}