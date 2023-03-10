import styled from 'styled-components';

export const StyledSmallerLoader = styled.span`
   width: 1.8rem;
   height: 1.8rem;
   border-radius: 50%;
   display: inline-block;
   border-top: 3px solid #38e329;
   border-right: 3px solid transparent;
   box-sizing: border-box;
   animation: rotation 1s linear infinite;

   @keyframes rotation {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(360deg);
      }
   }
`;

export const StyledMessageLoadingFrame = styled.section.attrs({
   className: 'user-image, content-wrapper',
})`
   display: flex;
   border-radius: 0.8rem;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
   padding: 1.1rem 0rem 1.1rem 1.2rem;
   gap: 0.5rem;

   .user-image {
      width: 1.4rem;
      height: 1.4rem;
      background: linear-gradient(
         105deg,
         #444444 10%,
         #6d6d6d 20%,
         #444444 30%
      );
      border-radius: 50%;
   }
   .content-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
   }
   p {
      height: 1.3rem;
      width: 20rem;
      background: linear-gradient(110deg, #444444 2%, #6d6d6d 6%, #444444 10%);
      border-radius: 0.6rem;
   }

   .user-image,
   p {
      background-size: 200% 100%;
      animation: 2s shine linear infinite, 2s fade-away linear infinite;
   }

   @keyframes shine {
      100% {
         background-position-x: -200%;
      }
   }

   @keyframes fade-away {
      0% {
         opacity: 0.8;
      }

      50% {
         opacity: 0.4;
      }

      100% {
         opacity: 0.8;
      }
   }
`;
