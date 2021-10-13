import Modal from './components/modal';
import AnimatedModal from 'components/animated';
import ModalCountDown from 'components/countdown';

function App() {
  return (
    <div className="App">
        <Modal
          btnActive = "Basic Modal"
          title = "Hello World"
          description = "Thank you for clicking me!!"
        />
        <AnimatedModal
          btnActive = "Animation"
          title = "Animation"
          description = "Let's add animation and transformation."
        />
        <ModalCountDown
          btnActive = "Countdown"
          title = "Countdown the Modal"
          description = "Modal will automatically turn off for amount of time. The confirm button is disabled."
          countdown = {5}
        />
    </div>
  );
}

export default App;
