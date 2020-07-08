import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addOutline, logInOutline, personOutline } from 'ionicons/icons';
import RegisterTab from './pages/RegisterTab';
import LoginTab from './pages/LoginTab';
import AccountTab from './pages/AccountTab';
import { Connection } from './components/Connection'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/register" component={RegisterTab} exact={true} />
          <Route path="/login" component={LoginTab} exact={true} />
          <Route path="/account" component={AccountTab} />
          <Route path="/" render={() => <Redirect to="/register" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton hidden={Connection.loggedIn.user.firstName !== undefined} tab="registerTab" href="/register">
            <IonIcon icon={addOutline} />
            <IonLabel>Register</IonLabel>
          </IonTabButton>
          <IonTabButton tab="logInTab" href="/login">
            <IonIcon icon={logInOutline} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton hidden={Connection.loggedIn.user.firstName === undefined} tab="accountTab" href="/account">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>)
};

export default App;
