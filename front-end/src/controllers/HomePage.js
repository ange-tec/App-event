import HomePageViews from '../views/HomePage-views';
import NavViews from '../views/Nav-views';

class HomePage {
  constructor() {
    this.el = document.querySelector('#app');

    this.run();
  }

  render() {
    return (`
      <nav>
        ${NavViews()}
      </nav>
      <div>
        ${HomePageViews()}
      </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
  }
}

export default HomePage;
