/**
 * grid-demo
 */


let html_css_grid_1 = `
<section class="grid-demo">
<!-- Header Showcase -->
<header id="showcase" class="grid">

  <button id="menu-button" class="btn btn-primary">Menu</button>

  <div class="bg-image"></div>

  <div class="content-wrap">
    <h1>Welcome to Acme Web Solutions</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi
      laboriosam eos saepe asperiores dolorum.</p>
    <a href="#section-b" class="btn btn-primary">Read More</a>
  </div>
</header>

<nav id="nav" class="nav">
  <ul>
    <li>Nav 1</li>
    <li>Nav 2</li>
    <li>Nav 3</li>
    <li>Nav 4</li>
  </ul>
</nav>

<!-- Main Area -->
<main id="main">
  <!-- Section A -->
  <section id="section-a" class="grid">
    <div class="content-wrap">
      <h2 class="content-title">Web & Application Development</h2>
      <div class="content-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint eligendi possimus? Unde officiis
          magnam laborum ipsa distinctio odio, vero dolores dicta aliquam aperiam repellendus. Perferendis
          officiis deserunt velit voluptas nobis sequi
          animi totam, accusantium, ex eius quia, natus quo?</p>
      </div>
    </div>
  </section>

  <!-- Section B -->
  <section id="section-b" class="grid grid--wide">
    <div class="content-wrap">
      <ul>
        <li>
          <div class="card">
            <img src="https://static.pexels.com/photos/574077/pexels-photo-574077.jpeg" alt="">
            <div class="card-content">
              <h3 class="card-title">Web Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi
                velit
                voluptatum cum maiores exercitationem.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="https://static.pexels.com/photos/261628/pexels-photo-261628.jpeg" alt="">
            <div class="card-content">
              <h3 class="card-title">Mobile Applications</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi
                velit
                voluptatum cum maiores exercitationem.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="card">
            <img src="https://static.pexels.com/photos/265087/pexels-photo-265087.jpeg" alt="">
            <div class="card-content">
              <h3 class="card-title">Tech Marketing</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa neque quo eum et quasi
                velit
                voluptatum cum maiores exercitationem.</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- Section C -->
  <section id="section-c" class="grid">
    <div class="content-wrap">
      <h2 class="content-title">We handle all of your digital needs</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam rerum vel earum error fugiat
        cupiditate, dolore eius! Minus, explicabo.</p>
    </div>
  </section>

  <!-- Section D -->
  <section id="section-d" class="grid">
    <div class="box">
      <h2 class="content-title">Contact Us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, suscipit. Rerum ducimus a quod, ut et
        voluptas obcaecati unde fuga.</p>
      <p>contact@acmewebsolutions.test</p>
    </div>
    <div class="box">
      <h2 class="content-title">About Our Company</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum porro deserunt, deleniti, quae
        facere repudiandae, officiis est exercitationem nobis iusto doloremque! Soluta excepturi in aut suscipit
        amet temporibus quo?</p>
    </div>
  </section>
</main>

<!-- Footer -->
<footer id="main-footer" class="grid">
  <div>Acme Web Solutions</div>
  <div>Project By <a href="http://traversymedia.com" target="_blank">Traversy Media</a></div>
</footer>

</section>
`;

var html_css_grid_2 = `<section class="grid-demo-2">
<div class="wrapper">
  <nav class="nav">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
  <section class="masthead">
    <header class="showcase">
      <h1>Your web presence</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, dolorum officia et iste iure
        repudiandae!</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </header>

    <div class="top-box top-box-a">
      <h4>Membership</h4>
      <p class="price">RM99/month</p>
      <a href="#" class="btn btn-secondary">Buy Now</a>
    </div>
    <div class="top-box top-box-b">
      <h4>Pro membership</h4>
      <p class="price">RM299/month</p>
      <a href="#" class="btn btn-secondary">Buy Now</a>
    </div>

  </section>

  <!-- boxes section -->
  <section class="boxes">
    <div class="box">
      <i class="fa fa-music fa-4x"></i>
      <h3>Marketing</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero reiciendis, est animi
        fuga.</p>
    </div>
    <div class="box">
      <i class="fa fa-globe fa-4x"></i>
      <h3>Analytics</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero reiciendis, est animi
        fuga.</p>
    </div>
    <div class="box">
      <i class="fa fa-cog fa-4x"></i>
      <h3>Development</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero reiciendis, est animi
        fuga.</p>
    </div>
    <div class="box">
      <i class="fa fa-users fa-4x"></i>
      <h3>Support</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat minima vero reiciendis, est animi
        fuga.</p>
    </div>
  </section>

  <!-- info section -->
  <section class="info">
    <img
      src="https://images.pexels.com/photos/2333750/pexels-photo-2333750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="">
    <div>
      <h2>Your Business On the Web</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aperiam eligendi odit illum. Cum
        laborum excepturi libero. Quibusdam fugit, rerum assumenda, nesciunt magnam vel veritatis rem repellendus,
        et quae dolore.</p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
  </section>
  <!-- portfolio section -->
  <section class="portfolio">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
    <img
      src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=180"
      alt="">
  </section>

  <!-- footer -->
  <footer class="footer">
    <p>&copy; GridWork 2019</p>
  </footer>
</div>
</section>`;

cssgrid_include_html(html_css_grid_1);
cssgrid_include_html(html_css_grid_2);

function cssgrid_include_html(template) {
  document.body.innerHTML += template;
}

document.addEventListener("DOMContentLoaded", function () {
  var menu_button = document.getElementById('menu-button');
  if (menu_button) {
    menu_button.addEventListener('click', function () {
      document.getElementById("nav").classList.toggle("open");
    });
  }
});