export default function PostTable() {
  return (
    <div class="card">
      <div class="card-header">
        <h4>All Posts</h4>
      </div>
      <div class="card-body">
        <div class="float-left" style={{ width: '50%'}}>

          <select class="js-example-basic-single" name="state" style={{ width: '50%'}}>
            <option value="AL">Alabama</option>
            ...
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div class="float-right">
          <form>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search" />
              <div class="input-group-append">
                <button class="btn btn-primary"><i class="fas fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div class="clearfix mb-3"></div>
        <div class="table-responsive">
          <table class="table table-striped">
            <tbody><tr>
              <th class="pt-2">
                <div class="custom-checkbox custom-checkbox-table custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad" class="custom-control-input" id="checkbox-all" />
                  <label for="checkbox-all" class="custom-control-label">&nbsp;</label>
                </div>
              </th>
              <th>Author</th>
              <th>Title</th>
              <th>Category</th>
              <th>Created At</th>
              <th>Views</th>
              <th>Status</th>
            </tr>
              <tr>
                <td>
                  <div class="custom-checkbox custom-control">
                    <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-2" />
                    <label for="checkbox-2" class="custom-control-label">&nbsp;</label>
                  </div>
                </td>
                <td>
                  <a href="#">
                    <span class="d-inline-block ml-1">Cara Stevens</span>
                  </a>
                </td>
                <td>Post Title 1
                  
                </td>
                <td>
                  <a href="#">Science</a>
                </td>
                <td>10-02-2019</td>
                <td>3,587</td>
                <td>
                  <div class="badge badge-warning">Pending</div>
                </td>
              </tr>
              
            </tbody></table>
        </div>
        <div class="float-right">
          <nav>
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}