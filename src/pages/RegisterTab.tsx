import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import RegisterContainer from '../components/RegisterContainer';
import './RegisterTab.css';

const RegisterTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register Tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RegisterContainer/>
      </IonContent>
    </IonPage>
  );
};

export default RegisterTab;
