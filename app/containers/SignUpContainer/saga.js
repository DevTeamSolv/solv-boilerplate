
import { take, call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import {email, ethAmount, ethAddress, fName, lName, reffCode} from "./selectors";
import { SIGN_UP } from "./constants";
import {changeLoader, signUpResp} from "./actions";
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from "axios";
// import $ from "jquery";

function* signUp() {
  yield put(changeLoader(true));
  const first_name = yield select(fName());
  const last_name = yield select(lName());
  const eth_address = yield select(ethAddress());
  const eth_amount = yield select(ethAmount());
  const Email = yield select(email());
  const ref_code = yield select(reffCode());
  const data = {
    first_name,
    last_name,
    eth_address,
    eth_amount,
    ref_code,
    email: Email
  }
  console.log(data, "first-name")


  try {
    const res = yield call(axios.post.bind(axios, 'http://ec2-52-201-203-83.compute-1.amazonaws.com/api/users'), data);
    // const res = yield call(axios.post.bind(axios, 'http://localhost:8000/api/users'), data);
    console.log(res);
    if(res.statusText === "OK"){
      if(res.data.success) {
        console.log("signup Successful")
        yield put(signUpResp("registered", false));
        // var h = $(document).height(); // returns height of HTML document
        // $('.sign-up').css('min-height', h+'px')
      }
      else {
        console.log("already!")
        yield put(signUpResp(res.data.message, false));
      }
    }
  } catch (err) {
    console.log(err);
  }
  yield put(changeLoader(false));

}


// Individual exports for testing
export default function* defaultSaga() {
  const watcher = yield takeLatest(SIGN_UP, signUp)
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  // See example in containers/HomePage/saga.js
}


