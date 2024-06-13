import axios from 'axios';
import EditViews from '../views/Edit-views';
import NavViews from '../views/Nav-views';

const Edit = class {
  constructor() {
    this.el = document.querySelector('#app');

    this.run();
  }

  render() {
    return (`
    <nav>
      <div class="container-fluid">
        ${NavViews()}
      </div>
    </nav>
    <div class="container border rounded shadow p-4">
      <div class="row">
        ${EditViews()}
      </div>
    </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
    this.onClickSubmitEdit();
  }

  onClickSubmitEdit() {
    const submitE = document.querySelector('#submitEdit');

    submitE.addEventListener('click', async (e) => {
      e.preventDefault();

      await axios({
        method: 'get',
        header: ('Content-type: application/json'),
        url: 'http://localhost:3000/event'
      }).then((res) => {
        res.data.forEach((data) => {
          console.log(data);
        });
      }).catch((error) => {
        console.error(error);
      });
    });
  }
};

export default Edit;
