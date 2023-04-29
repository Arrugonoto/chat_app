import { useRef } from 'react';

// components
import { EmojiPickerStyled } from './MessageForm.styled';

// packages
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

// context
import { useMessageContext } from '../../context/MessagesContext';
import { useThemeContext } from '../../context/ThemeContext';

// hooks
import useConditionalListener from '../../hooks/useConditionalListener';

const EmojiPicker = ({ displayPicker, setDisplayPicker, pickerBtn }) => {
   const { setMessageValue } = useMessageContext();
   const { isDarkTheme } = useThemeContext();
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
      setMessageValue(prev => prev + e.native);
   };

   useConditionalListener('keydown', handleKeyDown, displayPicker);
   useConditionalListener('pointerdown', handlePointerDown, displayPicker);

   return (
      <EmojiPickerStyled ref={pickerContainerRef}>
         <Picker
            data={data}
            onEmojiSelect={handleAddEmoji}
            previewPosition={'none'}
            maxFrequentRows={2}
            theme={isDarkTheme ? 'dark' : 'light'}
         />
      </EmojiPickerStyled>
   );
};

export default EmojiPicker;
