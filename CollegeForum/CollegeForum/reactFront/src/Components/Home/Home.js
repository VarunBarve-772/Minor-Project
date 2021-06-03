import React,{ useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ShowQuestions from '../CommonFiles/ShowQuestions';
import Category from './Category';
import Navbar from '../CommonFiles/Navbar';
import '../../css/Home.css';

const Home = (props) => {

  let category = {
    'category': 'SVIIT'
  }
  const [questionCategory, setQuestionCategory] = useState(category);
  const [questionState, setQuestionState] = useState('');
  const { register, handleSubmit } = useForm();
  
  useEffect( () => {
    setQuestionState(<ShowQuestions questionCategory={ questionCategory } fetchUrl={ 'showQues' } />)
  }, [questionCategory])

  const searchQuestion = (data) => {
    setQuestionState(<ShowQuestions questionCategory={ data } fetchUrl={ 'Search' } />)
  }

    return(
      <div>
        <Navbar setUserId={ props.setUserId }/>

        <div className="sec-2">
          <form onSubmit={handleSubmit(searchQuestion)}>
            <input type="text" className="ques_input" name='searchQuery' {...register('searchQuery')} required/>
            <button className="search_btn" type='submit'>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>

            <Category setQuestionCategory={setQuestionCategory} />

          </form>

          <div className="sec-3">
            { questionState }
          </div>

        </div>
      </div>

    );
}

export default Home;