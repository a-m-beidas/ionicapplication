import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react';
import './AccountTab.css';
import { Connection } from '../components/Connection'

const AccountTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account Tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel className="container">Hello {Connection.loggedIn.user.firstName} {Connection.loggedIn.user.lastName}</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default AccountTab;
