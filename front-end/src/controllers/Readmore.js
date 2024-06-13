import NavViews from '../views/Nav-views';

const Readmore = class {
  constructor() {
    this.el = document.querySelector('#app');

    this.run();
  }

  render() {
    return (`
      <nav>
        ${NavViews()}
      </nav>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Readmore;
