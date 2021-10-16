import React from "react";

const NewsLetter: React.FC = () => {
  return (
    <div className='newsletter'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='newsletter-content'>
              <div className='newsletter-content-header'>
                <h2 className='section-heading'>OUR NEWSLETTER</h2>
              </div>
              <div className='newsletter-content-description'>
                <p className='description'>
                  Subscribe for our e-mail newsletter and stay informed for
                  what’s next on the horizon.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='newsletter-form'>
              <form className='form-group form-box'>
                <div className='row'>
                  <div className='col-md-9'>
                    <input
                      type='email'
                      className='form-control email-input'
                      placeholder='Enter your email address'
                    />
                  </div>
                  <div className='col-md-3'>
                    <div className='btnBox'>
                      <button type='submit' className='btn'>
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
