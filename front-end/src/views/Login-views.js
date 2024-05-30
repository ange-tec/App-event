export default () => (`
  <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
  </svg>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"></label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" required>
      <div id="emailHelp" class="form-text"></div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label"></label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
    </div>
    <div class="text-center mt-4 mb-4">
      <button type="submit" class="btn btn-primary">Confirmer</button>
    </div>
  </form>
`);
