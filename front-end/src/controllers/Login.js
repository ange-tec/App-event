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
    <div class="container bd-example m-auto border mt-5 pt-5 border shadow rounded-5">
      <div class="row">${LoginViews()}</div>
    </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
  }

  onClickSubmitRegister() {
    const submitR = document.querySelector('#submitRegister');

    submitR.addEventListener('click', async (e) => {
      e.preventDefault();

      const data = {
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
      };

      await axios({
        method: 'post',
        url: 'http://localhost:3000/auth/login',
        data:{
          email: data['email'],
          password: data['password']
        }
      }).then((res) => {
        console.log(res);
      }).catch((error) => {
        console.error(error);
      });
    });
  }
};

export default Login;
