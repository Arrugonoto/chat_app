import { useRef } from 'react';
import { EmojiPickerStyled } from './MessageForm.styled';

// emoji mart component
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

// context
import { useMessageContext } from '../../context/MessagesContext';

// hooks
import useConditionalListener from '../../hooks/useConditionalListener';

const EmojiPicker = ({
   setText,
   displayPicker,
   setDisplayPicker,
   pickerBtn,
}) => {
   const { editFlag, setMessageValue } = useMessageContext();
   const pickerContainerRef = useRef(null);

   const handleKeyDown = e => {
      if (e.key === 'Escape') setDisplayPicker(false);
   };
   const handlePointerDown = e => {
      if (
         !pickerContainerRef.current.contains(e.target) &&
         !pickerBtn.current.contains(e.target)
      )
         setDisplayPicker(false);
   };

   const handleAddEmoji = e => {
      if (!editFlag) {
         setText(prev => prev + e.native);
      } else {
         setMessageValue(prev => prev + e.native);
      }
   };

   useConditionalListener('keydown', handleKeyDown, displayPicker);
   useConditionalListener('pointerdown', handlePointerDown, displayPicker);

   return (
      <EmojiPickerStyled ref={pickerContainerRef}>
         <Picker
            data={data}
            onEmojiSelect={handleAddEmoji}
            previewPosition={'top'}
            maxFrequentRows={2}
         />
      </EmojiPickerStyled>
   );
};

export default EmojiPicker;
