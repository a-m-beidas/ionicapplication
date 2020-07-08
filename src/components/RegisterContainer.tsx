import React, { useState } from 'react';
import {IonLabel, IonInput, IonButton, IonTitle, IonList} from '@ionic/react';
import './ExploreContainer.css';
import { Connection} from './Connection'
import { Validation, InputField } from './Validation'
const { registerValidity, emailRegex } = Validation


    var disableSubmit: boolean = true
    const RegisterContainer: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function submitRegister() {
      let result = Connection.post('/register', { 
            email : email,
            password : password,
            firstName: firstName,
            lastName: lastName
          })
      alert(JSON.stringify(result))
    }

    function onInputChanged(newText:string, field: InputField) {
      if (field === InputField.EMAIL) {
        if (newText.match(emailRegex) && registerValidity.email === false) {
          registerValidity.email = true;
          registerValidity.count++;
        } else if (!newText.match(emailRegex) && registerValidity.email !== false) {
          registerValidity.email = false;
          registerValidity.count--;
        }
      } else if (field === InputField.PASSWORD) {
        if (newText.length >= 6 && registerValidity.password === false) {
          registerValidity.password = true;
          registerValidity.count++;
        } else if (newText.length < 6 && registerValidity.password === true) {
          registerValidity.password = false;
          registerValidity.count--;
        }
      } else if (field === InputField.FIRSTNAME) {
        if (newText.length >= 2 && registerValidity.firstName === false) {
          registerValidity.firstName = true;
          registerValidity.count++;
        } else if (newText.length < 2 && registerValidity.firstName === true) {
          registerValidity.firstName = false;
          registerValidity.count--;
        }
      } else if (field === InputField.LASTNAME) {
        if (newText.length >= 2 && registerValidity.lastName === false) {
          registerValidity.lastName = true;
          registerValidity.count++;
        } else if (newText.length < 2 && registerValidity.lastName === true) {
          registerValidity.lastName = false;
          registerValidity.count--;
        }
      }
      disableSubmit = registerValidity.count !== 4
    }

    return (
      <IonList className="credentialsContainer">
        <IonTitle>Enter Credentials</IonTitle>
        <form onSubmit={submitRegister}>
          <IonList className="formCredentialsContainer">
            <IonLabel>
                Email
            </IonLabel>
            <IonInput
                type="email"
                className="credentialsInput"
                placeholder="Email"
                onIonChange={(e : any) => {onInputChanged(e.target.value, InputField.EMAIL); setEmail(e.target.value)}}/>
            <IonLabel>
                Password
            </IonLabel> 
            <IonInput
                type="password"
                className="credentialsInput"
                placeholder="Password"
                onIonChange={(e : any) => {onInputChanged(e.target.value, InputField.PASSWORD); setPassword(e.target.value)}}/>
            <IonLabel>
                First Name
            </IonLabel> 
            <IonInput
                type="text"
                className="credentialsInput"
                placeholder="First Name"
                onIonChange={(e : any) => {onInputChanged(e.target.value, InputField.FIRSTNAME); setFirstName(e.target.value)}}/>
            <IonLabel>
                Last Name
            </IonLabel>
            <IonInput
                type="text"
                className="credentialsInput"
                placeholder="Last Name"
                onIonChange={(e : any) => {onInputChanged(e.target.value, InputField.LASTNAME); setLastName(e.target.value)}}/>
            <IonButton type="submit" 
                disabled={disableSubmit}
                className="credentialsButton">Register</IonButton>
          </IonList>
        </form>
      </IonList>
    );
  };
  
  export default RegisterContainer;