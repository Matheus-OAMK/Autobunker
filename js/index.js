const BACKEND_URL = 'http://localhost:3001';

const servicesRoute = `${BACKEND_URL}/services`;
const subServicesRoute = `${BACKEND_URL}/sub-services`;

const container = document.querySelector('.services');
const cardTemplate = document.querySelector('[data-card-template]');

fetch(servicesRoute)
  .then((res) => res.json())
  .then((services) => {
    services.forEach((service) => {
      const card = cardTemplate.content.cloneNode(true);
      const serviceName = card.querySelector('[card-data-service-name]');
      const subServiceList = card.querySelector('[card-data-subservices-list]');
      const cardImgFront = card.querySelector('[card-data-front-image]');


      serviceName.textContent = service.service;
      cardImgFront.style.backgroundImage = `url('../img/front/${service.service}.webp')`;
      container.append(card);
    })
  })
