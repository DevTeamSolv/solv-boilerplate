
import { take, call, put, select, takeLatest, cancel } from 'redux-saga/effects';
import {makeSelectEmail} from "./selectors";
import { SIGN_IN } from "./constants";
import {changeLoader, signInResp} from "./actions";
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from "axios";
// import $ from "jquery";

function* signIn() {
  yield put(changeLoader(true));
  const eth_address = yield select(makeSelectEmail());
  const data = {
    eth_address
  }
  console.log(data, "first-name")


  try {
    const res = yield call(axios.post.bind(axios, 'http://ec2-52-201-203-83.compute-1.amazonaws.com/api/login'), data);
    // const res = yield call(axios.post.bind(axios, 'http://localhost:8000/api/login'), data);
    console.log(res);
    if(res.statusText === "OK"){
      if(res.data.success) {
        console.log(res.data, "signup Successful")
        yield put(signInResp("success", false, res.data.user.first_name));
        // var h = $(document).height(); // returns height of HTML document
        // $('.sign-up').css('min-height', h+'px')
      }
      else {
        console.log("invalid!")
        yield put(signInResp("invalid", false));
      }
    }
  } catch (err) {
    console.log(err);
  }
  yield put(changeLoader(false));

}


// Individual exports for testing
export default function* defaultSaga() {
  const watcher = yield takeLatest(SIGN_IN, signIn)
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  // See example in containers/HomePage/saga.js
}


