import React from 'react';
import Link from 'next/link';

import Page from '../components/layouts';

import {
  inputClass, buttonClass, bodyLink,
} from '../config/constants';

const Login = () => (
  <div>
    <Page meta={{ title: 'Login', description: 'Desc' }}>
      <div className="pv5 ph4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">
              Log In
            </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
                <input className={inputClass} type="email" name="email-address" id="email-address" />
              </label>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
                <input className={inputClass} type="password" name="password" id="password" />
              </label>
            </div>
            <div>
              <input className={buttonClass} type="submit" value="Log in" />
            </div>
            <div className="lh-copy mt3">
              <Link href="/signup">
                <a className={bodyLink}>
                  Sign up
                </a>
              </Link>
              <Link href="/signup">
                <a className={bodyLink}>
                  Forgot your password?
                </a>
              </Link>
            </div>
          </fieldset>
        </div>
      </div>
    </Page>
  </div>
);

export default Login;
