const useRandomColor = () => {
   const generateColor = () =>
      `hsl(${Math.floor(Math.random() * 360)} 85% 40%)`;

   return { generateColor };
};

export default useRandomColor;
