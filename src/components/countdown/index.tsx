import { ReactElement, useState } from 'react';
import style from './modal.module.scss';

type Content = {
    title: string;
    description: string;
    btnActive: string;
    countdown: number;
}

const ModalCountDown = (props: Content): ReactElement => {

    const [switchModal, setSwitchModal] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(props.countdown);
    var time = props.countdown;

    const modalActive = (): void => {
        setSwitchModal(true);
        time = props.countdown;
        setCountdown(props.countdown);
        
        const setTimer = (): void => {
            if (time <= 0){
                clearInterval(modalTimer);
                setSwitchModal(false);
            }
            else {
                time = time - 1;
                setCountdown(time);
            }
        };
        const modalTimer = setInterval(setTimer, 1000);
    };

    const modalDeactive = (): void => {
        setSwitchModal(false);
    };

    return(
        <div className={style.wrapper}>
            <button className={style.btnModalActive} onClick={modalActive}>{props.btnActive}</button>
            <div className={`${style.modal} ${switchModal? style.modalVisible : null}`} id="modal">
                <div className={style.modalContainer}>
                    <h1>{props.title}</h1>
                    <div className={style.description}>
                        <p>{props.description}</p>
                        <p>The Modal will be closed in <span>{countdown}s</span>.</p>
                    </div>
                    <div className={style.modalButtons}>
                        <button className={style.btnModalDeactive} onClick={modalDeactive} disabled={true}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCountDown;