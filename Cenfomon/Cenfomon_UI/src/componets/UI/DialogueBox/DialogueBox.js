import classes from './DialogueBox.module.css';

const DialogueBox = (props) => {

    const { imgLeft, imgRight, message } = props;
    const { dgBox, linkBtn, dgBox__text, imgWrapp, imgFlip, imgWrapp__right } = classes;


    return (
        <div className={dgBox}>
            <div className={`${imgWrapp} ${imgFlip}`}>
                <img src={imgLeft} alt="NPC face" />
            </div>
            <div className={dgBox__text}>
                <p>
                    {message}
                </p>
                <button className={linkBtn}>
                    {'Siguiente >'}
                </button>
            </div>
            <div className={`${imgWrapp} ${imgWrapp__right}`}>
                <img src={imgRight} alt="NPC face" />
            </div>
        </div>
    );
}

export default DialogueBox;