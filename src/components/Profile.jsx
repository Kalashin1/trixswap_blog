export default function UserProfile() {
  return (
    <section className="section">
      <div className="section-body container">
        <div className="row mt-sm-4">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="card author-box">
              <div className="card-body">
                <div className="author-box-center">
                  <img alt="image" src="assets/img/users/user-1.png" className="rounded-circle author-box-picture" />
                  <div className="clearfix"></div>
                  <div className="author-box-name">
                    <a href="#">Sarah Smith</a>
                  </div>
                  <div className="author-box-job">Web Developer</div>
                </div>
                <div className="text-center">
                  <div className="author-box-description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias
                      minus quod dignissimos.
                    </p>
                  </div>
                  <div className="mb-2 mt-3">
                    <div className="text-small font-weight-bold">Follow Hasan On</div>
                  </div>
                  <a href="#" className="btn btn-social-icon mr-1 btn-facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-social-icon mr-1 btn-twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-social-icon mr-1 btn-github">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="btn btn-social-icon mr-1 btn-instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <div className="w-100 d-sm-none"></div>
                </div>
              </div>
            </div>
            <div className="card my-4">
              <div className="card-header">
                <h4>Personal Details</h4>
              </div>
              <div className="card-body">
                <div className="py-4">
                  <p className="clearfix">
                    <span className="float-left">
                      Birthday
                    </span>
                    <span className="float-right text-muted">
                      30-05-1998
                    </span>
                  </p>
                  <p className="clearfix">
                    <span className="float-left">
                      Phone
                    </span>
                    <span className="float-right text-muted">
                      (0123)123456789
                    </span>
                  </p>
                  <p className="clearfix">
                    <span className="float-left">
                      Mail
                    </span>
                    <span className="float-right text-muted">
                      test@example.com
                    </span>
                  </p>
                  <p className="clearfix">
                    <span className="float-left">
                      Facebook
                    </span>
                    <span className="float-right text-muted">
                      <a href="#">John Deo</a>
                    </span>
                  </p>
                  <p className="clearfix">
                    <span className="float-left">
                      Twitter
                    </span>
                    <span className="float-right text-muted">
                      <a href="#">@johndeo</a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <div className="card">
              <div className="padding-20">
                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab2" data-toggle="tab" href="#about" role="tab"
                      aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab2" data-toggle="tab" href="#settings" role="tab"
                      aria-selected="false">Setting</a>
                  </li>
                </ul>
                <div className="tab-content tab-bordered container" id="myTab3Content">
                  <div className="tab-pane fade show active container my-4" id="about" role="tabpanel" aria-labelledby="home-tab2">
                    
                    <p className="m-t-30">Completed my graduation in Arts from the well known and
                      renowned institution
                      of India – SARDAR PATEL ARTS COLLEGE, BARODA in 2000-01, which was
                      affiliated
                      to M.S. University. I ranker in University exams from the same
                      university
                      from 1996-01.</p>
                    <p>Worked as Professor and Head of the department at Sarda Collage, Rajkot,
                      Gujarat
                      from 2003-2015 </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem
                      Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when
                      an unknown printer took a galley of type and scrambled it to make a
                      type
                      specimen book. It has survived not only five centuries, but also the
                      leap
                      into electronic typesetting, remaining essentially unchanged.</p>
                    
                    
                  </div>
                  <div className="tab-pane fade my-4" id="settings" role="tabpanel" aria-labelledby="profile-tab2">
                    <form method="post" className="needs-validation">
                      <div className="">
                        <h4>Edit Profile</h4>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="form-group col-md-6 col-12">
                            <label>First Name</label>
                            <input type="text" className="form-control" value="John" />
                            <div className="invalid-feedback">
                              Please fill in the first name
                            </div>
                          </div>
                          <div className="form-group col-md-6 col-12">
                            <label>Last Name</label>
                            <input type="text" className="form-control" value="Deo" />
                            <div className="invalid-feedback">
                              Please fill in the last name
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-7 col-12">
                            <label>Email</label>
                            <input type="email" className="form-control" value="test@example.com" />
                            <div className="invalid-feedback">
                              Please fill in the email
                            </div>
                          </div>
                          <div className="form-group col-md-5 col-12">
                            <label>Phone</label>
                            <input type="tel" className="form-control" value="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-12">
                            <label>Bio</label>
                            <textarea
                              className="form-control summernote-simple">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatum alias molestias minus quod dignissimos.</textarea>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group mb-0 col-12">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" name="remember" className="custom-control-input" id="newsletter" />
                              <label className="custom-control-label" for="newsletter">Subscribe to newsletter</label>
                              <div className="text-muted form-text">
                                You will get new information about products, offers and promotions
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <button className="btn btn-primary">Save Changes</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}