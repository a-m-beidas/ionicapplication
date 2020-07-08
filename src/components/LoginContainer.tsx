import React, { useState } from 'react';
import {IonLabel, IonInput, IonButton, IonTitle, IonList} from '@ionic/react';
import './ExploreContainer.css';
import { Connection} from'./Connection'
import { InputField, Validation } from './Validation'
import {rerender} from '../index'

const { loginValidity, emailRegex } = Validation

var disableSubmit: boolean = true
const LoginContainer: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submitLogin() {
      let result = await Connection.post('/login', { 
        email : email,
        password : password,
      })
      if (result.error !== undefined) {
        alert(result.error);
      } else {
        Connection.loggedIn.user = result;
      }
      rerender()
    }

    function onInputChanged(newText:string, field: InputField) {
      if (field === InputField.EMAIL) {
        if (newText.match(emailRegex) && loginValidity.email === false) {
          loginValidity.email = true;
          loginValidity.count++;
        } else if (!newText.match(emailRegex) && loginValidity.email !== false) {
          loginValidity.email = false;
          loginValidity.count--;
        }
      } else if (field === InputField.PASSWORD) {
        if (newText.length >= 6 && loginValidity.password === false) {
          loginValidity.password = true;
          loginValidity.count++;
        } else if (newText.length < 6 && loginValidity.password === true) {
          loginValidity.password = false;
          loginValidity.count--;
        }
      }
      disableSubmit = loginValidity.count !== 2
    }
    return (
      <IonList className="credentialsContainer">
        <IonTitle>Enter Credentials</IonTitle>
        <form onSubmit={submitLogin}>
          <IonList className="formCredentialsContainer">
              <IonLabel>
                  Username
              </IonLabel>
              <IonInput
                  className="credentialsInput"
                  placeholder="Email"
                  onIonChange={(e : any) => {onInputChanged(e.target.value, InputField.EMAIL); setEmail(e.target.value)}}/>
              <IonLabel>
                  Password
              </IonLabel> 
              <IonInput
                  className="credentialsInput"
                  placeholder="Password"
                  onIonChange={(e : any) => {onInputChanged(e.target.value, InputField.PASSWORD); setPassword(e.target.value)}}/>
              <IonButton 
                  type="button"
                  onClick={submitLogin}
                  disabled={disableSubmit}
                  className="credentialsButton" 
                  color="secondary">Login</IonButton>
          </IonList>
        </form>
      </IonList>
    );
  };
  
  export default LoginContainer;