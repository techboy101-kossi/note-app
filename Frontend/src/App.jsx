import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Budgets from './pages/budgets/Budgets';
import SignUp from './pages/signUpSignIn/SignUp';
import SignIn from './pages/signUpSignIn/SignIn';
import Notes from './pages/notes/Notes';
import NoteRead from './pages/notes/noteRead/NoteRead';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/notes' element={<Notes />} />
				<Route path='/notes/read/:noteId' element={<NoteRead />} />
			</Routes>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default App;
