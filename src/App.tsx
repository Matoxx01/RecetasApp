import React from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import './App.css'; // Importar el CSS

const App: React.FC = () => (
  <IonApp>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem button>
            <IonLabel>Iniciar sesión</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Configuración</IonLabel>
          </IonItem>
          <IonItem button>
            <IonLabel>Sobre Nosotros</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Mi Aplicación</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent id="main-content">
      <h1>Bienvenido a nuestra aplicación</h1>
      <p>Contenido principal aquí.</p>
    </IonContent>
  </IonApp>
);

export default App;
