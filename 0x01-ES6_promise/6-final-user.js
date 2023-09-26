import uploadPhoto from "./5-photo-reject";
import signUpUser from "./4-user-promise";

export default function handleProfileSignup(fname, lname, filename) {
  return Promise.allSettled([signUpUser(fname, lname), uploadPhoto(filename)]).then(res => (
    res.map(o => ({
      status: o.status,
      value: o.status === "fulfilled" ? o.value : String(o.reason),
    }))
  ));
}
