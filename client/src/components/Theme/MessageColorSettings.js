import { StyledMessageColorSettings } from './MessageColorSettings.styled';
import { messageBgColor, messageBgGradient } from '../../data/colors';

const MessageColorSettings = () => {
   return (
      <StyledMessageColorSettings>
         <h1>Message colors</h1>
         <div>
            <h2>Basic</h2>
            {messageBgColor.map(el => (
               <button
                  className="btn-bg-color"
                  key={el.id}
                  style={{ background: `${el.value}` }}
               ></button>
            ))}
         </div>
         <div>
            <h2>Gradient</h2>
            {messageBgGradient.map(el => (
               <button
                  className="btn-bg-gradient"
                  key={el.id}
                  style={{
                     background: `${el.value}`,
                     backgroundRepeat: 'no-repeat',
                  }}
               ></button>
            ))}
         </div>
         <div>
            <h2>Text</h2>
         </div>
      </StyledMessageColorSettings>
   );
};

export default MessageColorSettings;
