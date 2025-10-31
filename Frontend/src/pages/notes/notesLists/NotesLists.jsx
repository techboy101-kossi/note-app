import { listNotes } from '../../../redux/actions/notesActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { images } from '../../../components/images';
import * as Styles from './NotesListsStyles';

const NotesLists = () =>
{
  const{ notes} = useSelector(state => state.notes);

  console.log(notes);

  return (
		<Styles.NotesListsContainer>
			<Styles.NotesListsWrapper>
				{notes.map((note) => (
					<Styles.NotesListsItem>
						<Link to={`/notes/read/${note._id}`}>
							<h4>{note.title}</h4>
						</Link>
						<p>{note.content}</p>
						<Styles.NotesListsTimeLineBox>
							<small>{moment(note.createdAt).fromNow()}</small>
							{/* <small>{moment(note.createdAt).format('llll')}</small> */}
							<button>
								<img src={images.dotsIcon} alt='' />
							</button>
						</Styles.NotesListsTimeLineBox>
					</Styles.NotesListsItem>
				))}
			</Styles.NotesListsWrapper>
		</Styles.NotesListsContainer>
	);
};

export default NotesLists;
