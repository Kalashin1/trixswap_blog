export default function NewsLetter() {
  return (
    <div class="container pt-4 pb-4">
      <div class="border p-5 bg-lightblue">
        <div class="row justify-content-between">
          <div class="col-md-6">
            <h5 class="font-weight-bold secondfont">Become a member</h5>
            Get the latest news right in your inbox. It's free and you can unsubscribe at any time. We hate spam as much as we do, so we never spam!
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="First name" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Last name" />
              </div>
              <div class="col-md-12 mt-3">
                <button type="submit" class="btn btn-success btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}