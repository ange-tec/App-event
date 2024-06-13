export default () => (`
<form>
  <!-- Email input -->
  <div data-mdb-input-init class="form-outline">
    <input type="email" id="Email" class="form-control" placeholder="Email address" required/>
    <label class="form-label" for="form2Example1"></label>
  </div>

  <!-- Password input -->
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id="Password" class="form-control" placeholder="Password" required/>
    <label class="form-label" for="form2Example2"></label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class="col d-flex justify-content-around">
      <!-- Checkbox -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col d-flex justify-content-around">
      <!-- Simple link -->
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <ul class="notifications"></ul>

  <!-- Submit button -->
  <div class="d-flex justify-content-center">
    <a  href="#" data-mdb-ripple-init type="button" id="submitLogin" class="btn btn-primary btn-block mb-4">Sign in</a>
  </div>

  <!-- Register buttons -->
  <div class="text-center justify-content-evenly pb-3">
    <p>Not a member? <a href="/register">Register</a></p>
    <p>or sign up with:</p>
    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
`);
