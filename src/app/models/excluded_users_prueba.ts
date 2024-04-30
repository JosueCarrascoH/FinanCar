export class ExcludedUsersPrueba {
  private excludedDNIList: string[] = [
    '12345678', // Ejemplo de DNI excluido 1
    '87654321', // Ejemplo de DNI excluido 2
  ];

  constructor() {}

  addExcludedDNI(dni: string): void {
    this.excludedDNIList.push(dni);
  }

  removeExcludedDNI(dni: string): void {
    const index = this.excludedDNIList.indexOf(dni);
    if (index !== -1) {
      this.excludedDNIList.splice(index, 1);
    }
  }

  getDNIList(): string[] {
    return this.excludedDNIList;
  }

  // ... (El resto de los métodos permanece igual)
}
