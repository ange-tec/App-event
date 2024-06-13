import axios from 'axios';
import toastr from 'toastr';
import LoginViews from '../views/Login-views';
import NavViews from '../views/Nav-views';

const Login = class {
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
    <div class="container bd-example m-auto border rounded mt-5 pt-5 border shadow rounded-5">
      <div class="row">${LoginViews()}</div>
    </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
    this.onClickSubmitLogin();
  }

  onClickSubmitLogin() {
    const submitLog = document.querySelector('#submitLogin');

    submitLog.addEventListener('click', async (e) => {
      e.preventDefault();

      const data = {
        email: document.querySelector('#Email').value,
        password: document.querySelector('#Password').value
      };

      await axios({
        method: 'post',
        url: 'http://localhost:3000/auth/login',
        data
      }).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          toastr.success('We do have the Kapua suite available.');

          setTimeout(() => {
            window.location.href = '/dashboard';

            axios({
              method: 'get',
              url: 'http://localhost:3000/event/5'
            }).catch((error) => {
              console.error(error);
            });
          }, 1000);
        } else if (res.status === 404) {
          toastr.error('I do not think that word means what you think it means.');
        } else if (res.status === 401) {
          toastr.warning('Unauthorized.');
        }
      }).catch((error) => {
        console.error(error);
      });
    });
  }
};

export default Login;
