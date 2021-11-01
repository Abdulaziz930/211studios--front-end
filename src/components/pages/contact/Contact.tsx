import React, { useState } from "react";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IContactData, ISocialMediaData } from "../../../models/models";
import { useForm, SubmitHandler } from "react-hook-form";
import Banner from "../../common/Banner";
import InfoCard from "./InfoCard";
import { mainAPI } from "../../../api";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [contactInfo] = useAsyncData<IContactData>("Bio/getContactBio");
  const [socialMedias] = useAsyncData<ISocialMediaData[]>(
    "Social/getSocialMedias"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    setIsLoading(true);
    await mainAPI
      .post("Contact/sendEmail", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        phoneNumber: data.phoneNumber,
        message: data.message,
      })
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  return (
    <div className='contact-wrapper'>
      <Banner
        title='CONTACT'
        description='Reach out to our team for general and business enquiries'
        image='page-title-contact.jpg'
      />
      <div className='contact-content-wrapper'>
        <div className='contact-info'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <InfoCard
                  heading='Email'
                  content={contactInfo.data?.email ?? ""}
                  icon='<i class="far fa-envelope"></i>'
                  isSocial={false}
                />
                <InfoCard
                  heading='Phone'
                  content={contactInfo.data?.phoneNumber ?? ""}
                  icon='<i class="far fa-address-book"></i>'
                  isSocial={false}
                />
              </div>
              <div className='col-md-6'>
                <InfoCard
                  heading='address'
                  content={contactInfo.data?.address ?? ""}
                  icon='<i class="far fa-address-card"></i>'
                  isSocial={false}
                />
                <InfoCard
                  heading='Socials'
                  socials={socialMedias.data}
                  isSocial={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='contact-chat'>
          <div className='container'>
            <div className='contact-chat-heading'>
              <h1>LET’S CHAT</h1>
            </div>
            <form
              className='form-box'
              onSubmit={handleSubmit(onSubmit)}
              noValidate>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Your name *'
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className='text-danger'>Name is required</span>
                    )}
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Your subject'
                      {...register("subject")}
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Your email *'
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Incorrect email",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className='text-danger'>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Your phone number'
                      {...register("phoneNumber", {
                        pattern: {
                          value:
                            /^[+]?[0-9]{3}?[-]?[0-9]{2}[-]?[0-9]{3}[-]?[0-9]{2}[-]?[0-9]{2}$/,
                          message: "Incorrect number",
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <span className='text-danger'>
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      rows={3}
                      placeholder='Your message *'
                      {...register("message", { required: true })}></textarea>
                    {errors.message && (
                      <span className='text-danger'>Message is required</span>
                    )}
                  </div>
                  {!isLoading ? (
                    <button className='btn' type='submit'>
                      Send Message
                    </button>
                  ) : (
                    <button className='btn btn-disabled' type='button'>
                      <span
                        className='spinner-border spinner-border-sm'
                        role='status'
                        aria-hidden='true'></span>
                      Sending...
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
