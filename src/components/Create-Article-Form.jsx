
export default function CreateArticleForm() {

  return (
    <div className="container">
      <div>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Select Cover Photo</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
          <div class="form-group">
            <label>Select Tag</label>
            <select class="js-example-basic-multiple" id="tags" name="states[]" multiple="multiple" style={{ width: '100%'}}>
              <option selected>Select-Tag</option>
              <option value="AL">San Francisco</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Post Content</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
        </form>
      </div>
    </div>

  )
}