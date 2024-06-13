import axios from 'axios';
import NavViews from '../views/Nav-views';
import RegisterViews from '../views/Register-views';

const Register = class {
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
    <div class="container bd-example m-auto border mt-5 pt-5 border shadow rounded-5">
      <div class="row">${RegisterViews()}</div>
    </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
    this.onClickSubmitRegister();
  }

  onClickSubmitRegister() {
    const submitR = document.querySelector('#submitRegister');

    submitR.addEventListener('click', async (e) => {
      e.preventDefault();

      const data = {
        name: document.querySelector('#name').value,
        firstname: document.querySelector('#firstname').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
      };

      await axios({
        method: 'post',
        header: ('Content-type: application/json'),
        url: 'http://127.0.0.1:3000/user',
        data
      }).then((res) => {
        if (res.status === 200) {
          window.location = '/dashboard';
        }
      }).catch((error) => {
        console.error(error);
      });
    });
  }
};

export default Register;
