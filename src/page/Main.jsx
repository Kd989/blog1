import React, { useState } from "react";
import "../App.css";
import "../form.css"

import Header from "../component/Header";
import Nav from "../component/Nav";
import Banner from "../component/Banner";
import CardLayout from "../component/CardLayout";
import Card from "../component/Card";
import { CardObj } from "../component/CardObj";
import MaincontentLayout from "../component/MaincontentLayout";
import MainContentleftLayout from "../component/MainContentleftLayout";
import MainContentRightLayout from "../component/MainContentRightLayout";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import {  useNavigate } from 'react-router-dom';
import { MainObj, artticleunorder } from "../component/Leftobj";
import { unorder } from "../component/Leftobj";
import { orderList } from "../component/Leftobj";
import { article2 } from "../component/Leftobj";
import { article3 } from "../component/Leftobj";
import FormDataDisplay from "../component/FormDataDisplay";




const Main = () => {
  const [modalOpen,setmodalOpen]=useState(false)
  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});


  function myFuncCall(e){
    setmodalOpen(e)
  }
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const validationErrors = {};
    if (!formData.username) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(validationErrors).length === 0) {
        debugger
      
      console.log('Form submitted:', formData);
      setmodalOpen(false)
      setSubmittedData(formData);
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      setErrors({})
      navigate('/formData' ,{ state: { formData } });
    } else {
      setErrors(validationErrors);
    }
  };




  return (
    <>
      <div className="container">
        <Header myfunction={myFuncCall}/>
       
   

    <Nav />
        

   
     
      </div>
      <main className="container">
        <Banner />
        <CardLayout>
          {CardObj.map((e, i) => {
            return <Card key={i} {...e} />;
          })}
        </CardLayout>
        <MaincontentLayout>
          <MainContentleftLayout>
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>

            {/* article 1  */}
            <article className="blog-post">
              {
                MainObj.map((para,i)=>{
                  return (
                  <>
                  <h2 key={para.id} className="display-5 link-body-emphasis mb-1">
                    {para.Sampleblog}
                  </h2>
                  <p className="blog-post-meta blog-date"  key={para.id}>
                    {para.data}
                    <a href="/" className="mark"  key={para.id}>
                     {para.NameAnchor}
                    </a>
                  </p>

                  <p  key={para.id}>
                    {para.dec1}
                  </p>
                  <hr />
                   <p  key={para.id}>
                {para.dec2}
                  </p>
                  <h2  key={para.id}>{para.heading}</h2>
              <p  key={para.id}>
               {para.headingdec}
              </p>
              <h2  key={para.id}>{para.subheading}</h2>
              <p  key={para.id}>
               {para.subheadingdec}
              </p>
              </>
                  )
                })
              
              }

              <ul>
               {unorder.map((e,i)=>{
                return (
                 
                  <li key={i}>
{e.list}
                  </li>
                
                )
               })}
              </ul>
              <p>
                demonstration flowing, so be on the lookout dasd asd rwerdasd
              </p>
              <ol>
                {
                  orderList.map((e,i)=>{
                    return(

                    <li key={i}>
                      {
                        e.list
                      }
                    </li>
                    )
                  })
                }
              </ol>
              <p>dasdasdadhbfhsbfhs fjsdbfjsbdfj fjsdhf hsfhsauhfuh </p>
            </article>

            {/* 2 */}

            <article className="blog-post">

              {
article2.map((art,i)=>{
  return (
<>


              <h2 className="display-5 link-body-emphasis mb-1"  key={art.id}>
               {art.anotherBlog}
              </h2>
              <p  key={art.id}>
               {art.date}
                <a href="/"  key={art.id}>{art.anchorName}</a>
              </p>

              <p  key={art.id}>
               {art.dec1}
              </p>
              </>
                )
              })
                            }
            </article>

            {/* 3 article */}

            <article className="blog-post">

              {
               article3.map((e,i)=>{
                return (
                  <>
                 
                  <h2 className="display-5 link-body-emphasis mb-1">New feature</h2>
            <p className="blog-post-meta" key={e.id}>
                {e.date1}
                <a href="/"  key={e.id}>{e.anchorName}</a>
              </p>
              <p  key={e.id}>
               {e.dec1}
               
              </p>
             
                 <ul>
                {
                  artticleunorder.map((e,i)=>{
                    return(
                      <li key={i}>
                        {e.list}
                      </li>
                    )
                  })
                }
                 
               </ul>
                <p  key={e.id}>
                  {
                    e.dec2
                  }
                </p>
              </>
                )
               })
              }
             
            </article>

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary rounded-pill mx-2" href="/">
                Older
              </a>
              <a className="btn btn-outline-secondary rounded-pill disabled" href="/">
                Newer
              </a>
            </nav>
          </MainContentleftLayout>


          <MainContentRightLayout>
            <div className="position-sticky" style={{top:"2rem"}}> 
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">
              About
              </h4>
              <p className="mb-0">
              Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.
              </p>
            </div>
            <div class="p-4">
          <h4 className="fst-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li><a href="/">March 2021</a></li>
            <li><a href="/">February 2021</a></li>
            <li><a href="/">January 2021</a></li>
            <li><a href="/">December 2020</a></li>
            <li><a href="/">November 2020</a></li>
            <li><a href="/">October 2020</a></li>
            <li><a href="/">September 2020</a></li>
            <li><a href="/">August 2020</a></li>
            <li><a href="/">July 2020</a></li>
            <li><a href="/">June 2020</a></li>
            <li><a href="/">May 2020</a></li>
            <li><a href="/">April 2020</a></li>
          </ol>
          <h4 className="fst-italic mt-3">Else Where</h4>
          <ol className="list-unstyled mb-0">
            <li><a href="/">Git hub </a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Facebook</a></li>
            
          </ol>
        </div>
            </div>
          </MainContentRightLayout>
        </MaincontentLayout>
      </main>
      <>
                <Dialog
                  // fullScreen
                  open={modalOpen}
                  onClose={() => {
                 setmodalOpen(false);
                  }}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
             
          
                >
      
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">


                    <div className="signup-form-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        
      </form>
      {submittedData  && <FormDataDisplay formData={submittedData} />}
    </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  <Button
                      onClick={handleSubmit}
                      color="primary"
                    >
                      Submit
                    </Button>
                    <Button
                      onClick={()=>setmodalOpen(false)}
                      color="primary"
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
       
       
      
        </>
    </>
  );
};

export default Main;
