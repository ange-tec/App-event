import axios from 'axios';
import NavViews from '../views/Nav-views';
import EditViews from '../views/Edit-views';

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
      ${EditViews()}
    </div>
    `);
  }

  onClickSubmitEdit() {
    const div = document.querySelector('.divEdit');

    axios({
      method: 'get',
      url: 'http://localhost:3000/event/4'
    }).then((res) => {
      console.log(res.data);

      div.innerHTML = `
      <divc class= "container-fluid d-flex justify-content-evenly">
        <div class="card shadow" style="width: 18rem;">
          <img src=${res.data.image} class="card-img-top w-18" alt="">
          <div class="card-body cd-2a">
            <h5 class="card-title text-center">${res.data.detail}</h5>
            <p class="card-text">${res.data.description}</p>
          </div>
        </div>
        <form>
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <div data-mdb-input-init class="form-outline">
                  <input type="text" id="detail" class="form-control" placeholder="Details" value="${res.data.detail}"/>
                  <label class="form-label" for="form6Example1"></label>
                </div>
              </div>

              <div class=""selection>
                <label for="url" class="form-label">Entrez l'url ici :</label>
                <input class="form-control" name="url" id="image" type="url" id="formFileMultiple" pattern="https://.*"  value="${res.data.image}" required/>
              </div>

              <div data-mdb-input-init class="form-outline m-2 p-2">
                <label class="form-label" for="form6Example7">Description</label>
                <textarea class="form-control" id="description" rows="4">${res.data.description}</textarea>
              </div>

              <!-- Check boox-->
              <h6>Categories</h6>
              <div class="container-fluid border p-2 mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="${res.data.category_id}" id="category">
                  <label class="form-check-label" for="flexRadioDefault1">
                    Sport
                  </label>  
                </div>
          
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="2">
                  <label class="form-check-label" for="flexRadioDefault2">
                    Art
                  </label>                            
                </div>
          
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="3">
                  <label class="form-check-label" for="flexRadioDefault3">
                    Tourisme
                  </label>                            
                </div>
          
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="4">
                  <label class="form-check-label" for="flexRadioDefault4">
                  Egaming
                  </label>
                </div>
          
              </div>

              <div class="confirm">
                <a href="#" data-mdb-ripple-init type="button" id="save" class="btn btn-primary btn-block mb-4">Enregistrer</a>
              </div>

            </div>
          </div>
        </form>
      </div>
    `;
      const save = document.querySelector('#save');

      const edit = {
        image: document.querySelector('#image').value,
        detail: document.querySelector('#detail').value,
        description: document.querySelector('#description').value,
        category_id: toString()
      };

      save.addEventListener(('click'), async (e) => {
        e.preventDefault();

        axios({
          method: 'PUT',
          url: 'http://localhost:3000/event',
          edit
        }).catch((error) => {
          console.error(error);
        });
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  run() {
    this.el.innerHTML = this.render();
    this.onClickSubmitEdit();
  }
};

export default Edit;
