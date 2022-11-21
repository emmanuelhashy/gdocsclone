/* eslint-disable no-unused-vars */
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'

const signInGoogleButton = document.getElementById('sign-in');

// Google auth login
export function authenticateWithGoogle() {
	// eslint-disable-next-line no-undef
	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	// eslint-disable-next-line no-undef

	signInWithPopup(auth, provider)
		.then(function (result) {
			window.location.href = '../index.html';
			console.log('working', result)
		})
		.catch(function (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = error.credential;
			console.log(errorCode, errorMessage, email, credential);
		});
}

signInGoogleButton.addEventListener('click', authenticateWithGoogle);

