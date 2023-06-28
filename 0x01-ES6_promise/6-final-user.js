import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        let changedResult = {};
        if (result.status === 'fulfilled') {
          changedResult = result;
        } if (result.status === 'rejected') {
          changedResult = {
            status: result.status,
            value: result.reason,
          };
        }
        return changedResult;
      });
    });
}
