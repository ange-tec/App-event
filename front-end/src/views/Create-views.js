export default () => (`
<form>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" id="detail" class="form-control" placeholder="Details"/>
        <label class="form-label" for="form6Example1"></label>
      </div>
    </div>

    <!-- Uploader images-->
    <div class=""selection>
      <label for="url" class="form-label">Entrez l'url ici</label>
      <input class="form-control" name="url" id="image" type="url" id="formFileMultiple" pattern="https://.*" required/>
    </div>

    <!-- Message input -->
    <div data-mdb-input-init class="form-outline m-2 p-2">
      <label class="form-label" for="form6Example7">Description</label>
      <textarea class="form-control" id="description" rows="4"></textarea>
    </div>
  
    <!-- Check boox-->
    <h6>Categories</h6>
    <div class="container-fluid id="divCategory" border p-2 mb-4">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="1" id="category">
        <label class="form-check-label" for="flexRadioDefault1">
          Sport
        </label>  
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="2" id="category">
        <label class="form-check-label" for="flexRadioDefault2">
          Art
        </label>                            
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="3" id="category" checked>
        <label class="form-check-label" for="flexRadioDefault3">
          Tourisme
        </label>                            
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="4" id="category" checked>
        <label class="form-check-label" for="flexRadioDefault4">
        Egaming
        </label>
      </div>

    </div>

    <!-- Submit button -->
    <div class="edit-buttons d-flex justify-content-evenly">
      <div class="confirm">
        <a href="#" data-mdb-ripple-init type="button" id="submitCreateConf" class="btn btn-primary btn-block mb-4">Confirmer</a>
      </div>

      <div class="delete">
        <a href="#" data-mdb-ripple-init type="button" id="submitCreateSup" class="btn btn-danger btn-block mb-4">Supprimer</a>
      </div>
    </div>
  </div>
</form>
`);
