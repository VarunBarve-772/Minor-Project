import React,{ useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ShowQuestions from '../CommonFiles/ShowQuestions';
import Category from './Category';
import '../../css/Home.css';

const Home = (props) => {

  const { register, handleSubmit } = useForm();

  let category = {
    'category': 'SVIIT'
  }
  const [questionCategory, setQuestionCategory] = useState(category);
  const [questionState, setQuestionState] = useState('');
  let history = useHistory();
  
  useEffect( () => {
    setQuestionState(<ShowQuestions questionCategory={ questionCategory } fetchUrl={ 'showQues' } />)
  }, [questionCategory])

  const searchQuestion = (data) => {
    setQuestionState(<ShowQuestions questionCategory={ data } fetchUrl={ 'Search' } />)
  }

  const userLogout = () => {
    props.setUserId('');
    sessionStorage.clear();
    history.push('/');
  }

    return(
      <div>

        <div className="sec-1" >
          <div className="row">

            <div className="col-lg-4">
              <h1 className="title">College Forum</h1>                
            </div>

            <div className="col-lg-8">
              <div className="topnav">
                <div className="topnav-right" >
                  <Link className="ask" to="/AskQuestion">Ask a question</Link>
                  <Link className="a" to="/ContactUs">Contact Us</Link>
                  <Link className="a" to="/AboutUs">About Us</Link>
                  <Link className="a" to="/Profile">Profile</Link>
                  <button onClick={userLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-2">
          <form onSubmit={handleSubmit(searchQuestion)}>
            <input type="text" className="ques_input" name='searchQuery' {...register('searchQuery')} required/>
            <button className="search_btn" type='submit'>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>

            <Category setQuestionCategory={setQuestionCategory} />

          </form>

          {/* <Category setQuestionCategory={setQuestionCategory} /> */}

          <div className="sec-3">
            { questionState }
          </div>

        </div>

        
      </div>

    );
}

export default Home;