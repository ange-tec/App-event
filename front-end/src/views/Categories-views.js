export default () => (`
  <div class="row">
    <div class="row p-2 m-2 pb-2">
      <div class="col-12">
        <ul class="list-group list-group-flush overflow-auto">

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-regular fa-calendar"></i> Accueil </a>

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-user"></i> Vos évèments </a>

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-bell"></i> Notifications </a>
        </ul>
      </div>
    </div>

    <div class="d-flex justify-content-center p-100">
      <a  href="/create" data-mdb-ripple-init type="button" id="creatEvent" class="btn btn-primary btn-block mb-4"> Créer un évenement</a>
    </div>

    <div class="row p-2 m-2">
      <div class="col-12">
        <h6 class="category border text-uppercase text-center">categories</h6>
        <ul class="list-group list-group-flush">

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-palette"></i> Peinture </a>

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-basketball"></i> Basketball </a>

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-person-running"></i> Athlétisme </a>

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-bicycle"></i> Cyclisme </a>

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-film"></i> Cinéma </a>

          <a href="#" type="button" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-car"></i> Course de voiture </a>

        </ul>
      </div>
    </div>
  </div>
`);
