import { useEffect } from 'react';
// components
import { StyledMessageOptions } from './MessageOptions.styled';

// context
import { useMessageContext } from '../../context/MessagesContext';
import { useModalContext } from '../../context/ModalContext';

// icons
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const MessageOptions = ({ displayOptions, setDisplayOptions, id }) => {
  const { setOpenModal } = useModalContext();
  const { setMessageId } = useMessageContext();

  const handleClick = () => {
    setDisplayOptions(false);
    setOpenModal(true);
    setMessageId(id);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDisplayOptions(false);
      }
    };

    if (displayOptions) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [displayOptions, setDisplayOptions]);

  return (
    <StyledMessageOptions>
      <ul>
        <li>
          <button onClick={() => setDisplayOptions(false)}>
            Edit <FaEdit />
          </button>
        </li>
        <li>
          <button onClick={handleClick}>
            Delete <FaTrashAlt />
          </button>
        </li>
      </ul>
    </StyledMessageOptions>
  );
};

export default MessageOptions;
