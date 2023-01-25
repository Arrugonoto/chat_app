import { StyledMessageLoadingSkeleton } from './Loader.styled';

const LoadingFrame = () => {
   return (
      <StyledMessageLoadingSkeleton>
         <div className="user-image"></div>
         <div className="content-wrapper">
            <p></p>
            <p></p>
            <p></p>
         </div>
      </StyledMessageLoadingSkeleton>
   );
};

export default LoadingFrame;
