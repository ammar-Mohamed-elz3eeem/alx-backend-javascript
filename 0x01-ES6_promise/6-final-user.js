import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(fname, lname, filename) {
  return Promise.allSettled([signUpUser(fname, lname), uploadPhoto(filename)])
    .then((res) => (
      res.map((obj) => ({
        status: obj.status,
        value: obj.status === 'fulfilled' ? obj.value : String(obj.reason),
      }))
    ));
}
