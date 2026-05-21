import "./Send.css";

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};
const Send = ({ data }) => {
  return (
    <div className="send-container">
      <h2>Falta pouco...</h2>
      <p>A sua opiniao e muito importante</p>
      <p>Para concluir, clique no botao de enviar abaixo</p>
      <h3>Aqui esta o resumo da sua avaliacao {data.name}:</h3>
      <p className="review-data">
        <span>Satisfacao:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentario:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Send;
