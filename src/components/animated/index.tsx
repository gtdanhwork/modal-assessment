import { ReactElement, useState } from 'react';
import style from './animated.module.scss';

type Content = {
    title: string;
    description: string;
    btnActive: string;
}

const AnimatedModal = (props: Content): ReactElement => {

    const [switchModal, setSwitchModal] = useState<boolean>(false);

    const modalActive = (): void => {
        setSwitchModal(true);
    }

    const modalDeactive = (): void => {
        setSwitchModal(false);
    };

    return(
        <div className={style.wrapper}>
            <button className={style.btnModalActive} onClick={modalActive}>{props.btnActive}</button>
            <div className={`${style.modal} ${switchModal? style.modalVisible : null}`} id="modal">
                <div className={style.modalContainer}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <div className={style.modalButtons}>
                        <button className={style.btnModalDeactive} onClick={modalDeactive}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedModal;