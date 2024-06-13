import CardsViews from './Cards-views';
import CategoriesViews from './Categories-views';
import FooterViews from './Footer-views';

export default () => (`
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          ${CategoriesViews()}
        </div>
        <div class="col-10 shadow p-2">
          ${CardsViews()}
        </div>
      </div>
    </div>
  </main>
  <hr>
  <div class="container-fluid">
    <div class="row">
      ${FooterViews()}
    </div>
  <div>
`);
