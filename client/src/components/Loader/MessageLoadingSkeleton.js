import { StyledMessageLoadingSkeleton } from './Loader.styled';

const MessageLoadingSkeleton = ({ index }) => {
   return (
      <StyledMessageLoadingSkeleton
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
      </StyledMessageLoadingSkeleton>
   );
};

export default MessageLoadingSkeleton;
