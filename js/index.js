const BACKEND_URL = "http://localhost:3001"; //Change this to the backend url when deployed

const servicesRoute = `${BACKEND_URL}/services`;
const subServicesRoute = `${BACKEND_URL}/sub-services`;

const container = document.querySelector(".services");
const cardTemplate = document.querySelector("[data-card-template]");

//fetch the services
fetch(servicesRoute)
  .then(res => res.json())
  .then(services => {
    services.forEach(service => {
      //Clone the template content
      const card = cardTemplate.content.cloneNode(true);
      //Select the elements we need to update
      const serviceName = card.querySelector("[card-data-service-name]");
      const subServiceList = card.querySelector("[card-data-subservices-list]");
      const cardImgFront = card.querySelector("[card-data-front-image]");
      const cardImgBack = card.querySelector("[card-data-back-image]");

      //Update the elements
      serviceName.textContent = service.service;
      cardImgFront.style.backgroundImage = `url('../img/front/${service.service}.webp')`;
      cardImgBack.style.backgroundImage = `url('../img/back/${service.service}.webp')`;
      container.append(card); //Append the card to the container

      //Fetch the sub-services
      fetch(`${subServicesRoute}/${service.service}`)
        .then(res => res.json())
        .then(subServices => {
          subServices.forEach(subService => {
            const lisItem = document.createElement("li");
            lisItem.textContent = subService.sub_service;
            subServiceList.append(lisItem);
          });
        })
        .catch(error => {
          console.log("Error fetching sub-services:", error);
        });
    });
  })
  .catch(error => {
    console.log("Error fetching services:", error);
  });
