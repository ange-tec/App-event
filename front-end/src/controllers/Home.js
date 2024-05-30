import NavViews from '../views/Nav-views';
import HomeViews from '../views/Home-views';

const Home = class {
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
        ${HomeViews()}
      </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
