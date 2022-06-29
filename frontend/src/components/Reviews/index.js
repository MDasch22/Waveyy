
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { thunkGetAllReviews } from '../../store/reviews';
import CreateBeachModal from '../BeachFormModal';

export default function Reviews({beachId}) {


  return (
    <>
      <h2>Reviews</h2>
      <table className='reviews-table'>
        <thead>
          <tr className='review-headers'>
            <td>hello</td>
            <td>test</td>
            <td>bye</td>
          </tr>
        </thead>
      </table>
    </>
  )
}
