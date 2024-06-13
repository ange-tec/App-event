import axios from 'axios';
import NavViews from '../views/Nav-views';
import DashboardViews from '../views/Dashboard-views';

const Dashboard = class {
  constructor() {
    this.el = document.querySelector('#app');

    this.run();
  }

  render() {
    return (`
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            ${NavViews()}
          </div>
        </div>
        ${DashboardViews()}
      </div>
    `);
  }

  getAllEvents() {
    axios({
      method: 'get',
      header: ('Content-type: application/json'),
      url: 'http://localhost:3000/events'
    }).then((res) => {
      console.log(res);

      this.showEvents(res.data);
    }).catch((error) => {
      console.error(error);
    });
  }

  showEvents(events) {
    const divCard = document.querySelector('.divCard');

    events.forEach((event) => {
      divCard.innerHTML += `
      <div class="card shadow" style="width: 18rem;">
        <img src=${event.image} class="card-img-top w-18" alt="">
        <div class="card-body cd-2a">
          <h5 class="card-title text-center">${event.detail}</h5>
          <p class="card-text">${event.description}</p>
          <div class="links d-flex flex-nowrap justify-content-between">
            <div class="link-1">
              <a href="/readmore" class="btn btn-secondary">Découvrir</a>
            </div>
            <div class="link-2">
              <a href="/edit" class="btn btn-secondary"> Editer </a>
            </div>
          </div>
        </div>
      </div>
        `;
    });
  }

  run() {
    this.el.innerHTML = this.render();
    this.getAllEvents();
  }
};

export default Dashboard;
