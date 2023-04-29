// components
import { StyledMessageLoadingFrame } from './Loader.styled';

const MessageLoadingFrame = ({ index }) => {
   return (
      <StyledMessageLoadingFrame
         style={{
            display: 'flex',
            alignSelf: `${index % 2 === 0 ? 'end' : 'start'}`,
            flexDirection: `${index % 2 === 0 ? 'row-reverse' : 'row'}`,
         }}
      >
         <div className="user-image"></div>
         <div className="content-wrapper">
            <p></p>
            <p></p>
            <p></p>
         </div>
      </StyledMessageLoadingFrame>
   );
};

export default MessageLoadingFrame;
