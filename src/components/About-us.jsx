export default function About() {
  return (
    <div class="container pt-4 pb-4">
      <div class="row justify-content-center">
        <div class="col-lg-2 pr-4 mb-4 col-md-12 text-center">
          <div class="sticky-top text-center">
            <div class="text-muted">
              Share this
            </div>
            <div class="share d-inline-block">
              <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
                <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a class="a2a_button_facebook"></a>
                <a class="a2a_button_twitter"></a>
              </div>
              <script async src="https://static.addtoany.com/menu/page.js"></script>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <article class="article-post">
            <p>
              I hope you like Mundana. My name is <a target="_blank" href="https://www.buymeacoffee.com/sal">Sal</a>, I am the author of this template that I'm sharing you for free. You are currently previewing its demo, the article template to be more specific.
            </p>
            <p>
              Here are a few screenshots of Mundana and what you can do with it.
            </p>
            {/* <p>
              <a href="./article.html"><img src="assets/img/screenshot-mundana-article.png" class="shadow" /></a>
            </p>
            <p>
              <a href="./index.html"><img src="assets/img/screenshot-mundana.png" class="shadow" /></a>
            </p>
            <p>
              <a href="./category.html"><img src="assets/img/screenshot-mundana-category.png" class="shadow" /></a>
            </p>
            <p>
              Like it? You can download Mundana HTML Template for free!
            </p>
            <p>
              <a target="_blank" href="https://www.wowthemes.net/mundana-free-html-bootstrap-template" class="btn btn-secondary">&rarr; Go to Mundana's download page</a>
            </p> */}
          </article>
          <div class="border p-5 bg-lightblue mt-5">
            <div class="row justify-content-between align-items-center">
              <div class="col-md-8 mb-2 mb-md-0">
                <h5 class="font-weight-bold mb-3">About the author of Mundana</h5>
                Hi, I'm Sal, the author of the template you're currently previewing. I am sharing for free, for your personal &amp; commercial use on unlimited domains. If you'd like to support my work, donations are highly appreciated! You can remove the credit links after donation. Thank you!
              </div>
              <div class="col-md-4">
                <a target="_blank" href="https://www.buymeacoffee.com/sal" class="btn btn-warning btn-block"><i class="fa fa-coffee"></i> Buy me a coffee</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}