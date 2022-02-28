class Preloader {

  constructor() {

    // this.preloader1();
    this.preloader2();
  }

  preloader1() {
    this.html_preloader = `
    <!-- preloader - start -->
		<div class="preloader">
			<div class="lds-facebook">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<!-- preloader - end -->
    `;

    document.body.innerHTML += this.html_preloader;

    this.preloader = document.querySelector('.preloader');

    if (this.preloader) {
      this.remove_preloader();
    }
  }
  remove_preloader() {

    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.preloader.classList.add("preloader--finished");
      }
    };
  }

  preloader2(){
    this.html_preloader2 = `
      
    `;
  }

}

export default Preloader;