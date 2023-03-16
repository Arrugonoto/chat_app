import { useEffect } from 'react';
import { EmojiPickerStyled } from './MessageForm.styled';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const EmojiPicker = ({ setText, displayPicker, setDisplayPicker }) => {
   const closePicker = () => {};

   useEffect(() => {
      // window.addEventListener('keydown', closePicker)
   }, []);

   return (
      <EmojiPickerStyled>
         <Picker
            data={data}
            onEmojiSelect={e => setText(prev => prev + e.native)}
            previewPosition={'top'}
            maxFrequentRows={2}
         />
      </EmojiPickerStyled>
   );
};

export default EmojiPicker;
