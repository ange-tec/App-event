export default () => (`
<form>
  <!-- 2 column grid layout with text inputs for the first and last names -->
  <div class="row mb-4">
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" id="firstname" class="form-control" placeholder="First Name" required/>
        <label class="form-label" for="form3Example1"></label>
      </div>
    </div>
    <div class="col">
      <div data-mdb-input-init class="form-outline">
        <input type="text" id="name" class="form-control" placeholder="Name" required/>
        <label class="form-label" for="form3Example2"></label>
      </div>
    </div>
  </div>

  <!-- Email input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" id="email" class="form-control" placeholder="Email address" required/>
    <label class="form-label" for="form3Example3"></label>
  </div>

  <!-- Password input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="password" class="form-control" placeholder="Password" required/>
    <label class="form-label" for="form3Example4"></label>
  </div>

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked/>
    <label class="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>

  <!-- Submit button -->
  <div class="d-flex justify-content-center">
    <a href="#" id="submitRegister" data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Sign up</a>
  </div>

  <!-- Register buttons -->
  <div class="text-center pb-3">
    <p>or sign up with:</p>
    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
`);
