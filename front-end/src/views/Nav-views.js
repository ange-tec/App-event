export default () => (`
  <header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="/homepage"> Events! </a>
  
      <!-- Toggle button -->
      <button
        data-mdb-collapse-init
        class="navbar-toggler"
        type="button"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
  
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/dashboard">Dashboard</a>
          </li>
        </ul>
        <!-- Left links -->
  
        <div class="d-flex align-items-center">
          <a href="/login" data-mdb-ripple-init type="button" class="btn btn-primary px-3 me-2">
            Login
          </a>
          <a href="/register" data-mdb-ripple-init type="button" class="btn btn-primary me-3">
            Sign up
          </a>
          <a
            data-mdb-ripple-init
            class="btn btn-dark px-3"
            href="https://github.com/ange-tec/App-event"
            role="button"
            ><i class="fab fa-github"></i
          ></a>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
  </header>
  <hr>
`);
