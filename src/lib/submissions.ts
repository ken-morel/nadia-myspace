import { db } from '$lib/firebase.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export type Submission = {
	content: string;
	username: string;
};

const COLLECTION = 'experiences';

export async function getSubmissions(): Promise<Submission[]> {
	const submissions: Submission[] = [];
	const querySnapshot = await getDocs(collection(db, COLLECTION));
	querySnapshot.forEach((doc) => {
		try {
			submissions.push({
				content: doc.data().content,
				username: doc.data().username
			});
		} catch (e) {
			console.error(e);
		}
	});
	return submissions;
}

export async function submit(submission: Submission) {
	await addDoc(collection(db, COLLECTION), submission);
}
