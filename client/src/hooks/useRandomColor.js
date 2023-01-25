const useRandomColor = () => {
   const generateColor = () =>
      `hsl(${Math.floor(Math.random() * 360)} 85% 45%)`;

   return { generateColor };
};

export default useRandomColor;
