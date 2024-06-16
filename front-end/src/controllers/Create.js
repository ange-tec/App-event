import axios from 'axios';
import CreateViews from '../views/Create-views';
import NavViews from '../views/Nav-views';

class Create {
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
       ${CreateViews()}
      </div>
    </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
    this.onclickCreateEvent();
  }

  onclickCreateEvent() {
    const submitCreateConf = document.querySelector('#submitCreateConf');
    const submitCreateSup = document.querySelector('#submitCreateSup');
    const checkBoxE = document.querySelectorAll('input[type="checkbox"]');

    Array.from(checkBoxE).forEach((el) => {
      el.addEventListener('change', (e) => {
        console.log(e.target.value);
      });
    });

    submitCreateConf.addEventListener('click', async (e) => {
      e.preventDefault();

      const selectedCheckBoxes = Array.from(checkBoxE)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

      const data = {
        image: document.querySelector('#image').value,
        detail: document.querySelector('#detail').value,
        description: document.querySelector('#description').value,
        category_id: selectedCheckBoxes.toString()
      };

      await axios({
        method: 'post',
        header: ('Content-type: application/json'),
        url: 'http://localhost:3000/event',
        data
      }).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.error(error);
      });
    });

    submitCreateSup.addEventListener('click', async (e) => {
      e.preventDefault();

      await axios({
        method: 'delete',
        header: ('Content-type: application/json'),
        url: 'http://localhost:3000/event'
      }).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.error(error);
      });
    });
  }
}

export default Create;
