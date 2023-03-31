class App {
  constructor() {
    this.loadButton = document.getElementById('form');
  }

  async init() {
    await this.load();
    // Register click listener

    this.loadButton.addEventListener('submit', (e) => {
      e.preventDefault();

      this.run();
    });
  }

  run = () => {
    const selectWithDriver = document.getElementById('driverType');
    const passengerInput = document.getElementById('passengerInput');
    const dateInput = document.getElementById('dateInput');

    const passenger = parseInt(passengerInput.value);
    const formattedYear = moment(`${dateInput.value}`).format('YYYY');

    function formatNumber(num) {
      return !num || num == NaN ? 0 : num;
    }

    const carFiltered = Car.list.filter((v, k) => {
      const availableAt = moment(v.availableAt);

      // return v.available == (selectWithDriver.value == 'withDriver') && v.capacity >= formatNumber(passenger) && dateTime.isBefore(availableAt) && v.year == formattedYear;
      return v.available == (selectWithDriver.value == 'withDriver') && v.capacity >= formatNumber(passenger) && v.year == formattedYear;
    });

    if (!carFiltered.length) {
      this.renderCarNotFound()
    } else {
      this.renderCars(carFiltered);
    }

  };

  renderCars(cars) {
    const carContainerElement = document.getElementById('cars-container');

    carContainerElement.innerHTML = '';
    cars = cars ?? Car.list;
    cars.forEach((car) => {
      const node = document.createElement('div');
      node.classList = 'col-4';
      node.innerHTML = car.render();
      carContainerElement.appendChild(node);
    });
  }

  renderCarNotFound() {
    const carContainerElement = document.getElementById('cars-container');

    carContainerElement.innerHTML = `
      <p>Mobil tidak ditemukan</p>
    `;
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
}
