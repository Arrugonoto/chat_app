// generate random color for registered user - color is displayed only in dark theme mode
const useRandomColor = () => {
   const generateColor = () =>
      `hsl(${Math.floor(Math.random() * 360)} 85% 40%)`;

   return { generateColor };
};

export default useRandomColor;
