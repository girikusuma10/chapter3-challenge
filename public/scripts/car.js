class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card mb-5">
    <img src="${this.image}" class="card-img-top" style="height: 300px; object-fit: cover;" alt="...">
    <div class="card-body">
        <p class="font-card">${this.manufacture}/${this.model}</p>
        <p class="card-text" style="font-size: 16px; font-weight: 700;">RP ${this.rentPerDay}
            /hari</p>
        <p class="font-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            tempor incididunt ut labore et dolore magna aliqua. </p>
        <ul class="list-unstyled ">
            <li class="font-card"> <img src="images/fi_users.png" alt="" class=" pe-3">
                ${this.capacity} Orang</li>
            <li class="mt-3 font-card"> <img src="images/fi_settings.png" alt="" class=" pe-3">${this.transmission}</li>
            <li class="mt-3 font-card"> <img src="images/fi_calendar.png" alt="" class=" pe-3">Tahun
                ${this.year}</li>
            <a href="#" class="btn btn-primary border-0 mt-3" style="background-color: #5CB85F; width: 100%;">Pilih Mobil</a>
        </ul>
    </div>
    </div>
    `;
  }
}
