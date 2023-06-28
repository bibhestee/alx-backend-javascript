import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try {
    // Extract promise response from the functions
    const uploadPhotoResponse = uploadPhoto();
    const createUserResponse = createUser();
    // Promise.all is used to handle multiple promise at a time
    Promise.all([uploadPhotoResponse, createUserResponse])
      .then(([response1, response2]) => {
        const { body } = response1;
        const { firstName, lastName } = response2;
        console.log(`${body} ${firstName} ${lastName}`);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log('Signup system offline');
  }
}
