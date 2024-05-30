import CardsViews from './Cards-views';
import CategoriesViews from './Categories-views';
import FooterViews from './Footer-views';

export default () => (`
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 border shadow">
          ${CategoriesViews()}
        </div>
        <div class="col-10 shadow border p-2 overflow-auto">
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
