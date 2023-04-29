import { forwardRef, useEffect, useState } from 'react';

// components / styled
import { StyledTooltip } from './SignupForm.styled';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FaRegCheckCircle } from 'react-icons/fa';

// Regex - string validation
// name
const NAME_REGEX_LETTER = /^[A-Z]/;
const NAME_REGEX_LENGTH = /^.{4,32}$/;

// Regex - password
const PASS_REGEX_LENGTH = /^.{10,20}$/;
const PASS_REGEX_LETTER = /^.*(?=.*[a-z])(?=.*[A-Z]).*$/;
const PASS_REGEX_DIGIT = /^(?=.*\d).*$/;
const PASS_REGEX_SPECIAL = /^(?=.*\W).*$/;

const TooltipName = forwardRef((props, ref) => {
   const [firstLetter, setFirstLetter] = useState(false);
   const [correctLength, setCorrectLength] = useState(false);

   const checkName = () => {
      setFirstLetter(NAME_REGEX_LETTER.test(props.name));
      setCorrectLength(NAME_REGEX_LENGTH.test(props.name));
   };

   useEffect(() => {
      checkName();
      // eslint-disable-next-line
   }, [props.name]);

   return (
      <StyledTooltip ref={ref}>
         <h1>Name must:</h1>
         <ul>
            <li>
               {firstLetter ? (
                  <FaRegCheckCircle className="correct" />
               ) : (
                  <FontAwesomeIcon
                     icon={regular('circle-xmark')}
                     className="wrong"
                  />
               )}
               <p>start with capital letter</p>
            </li>
            <li>
               {correctLength ? (
                  <FaRegCheckCircle className="correct" />
               ) : (
                  <FontAwesomeIcon
                     icon={regular('circle-xmark')}
                     className="wrong"
                  />
               )}
               <p>be atleast 4 characters long, up to 32</p>
            </li>
         </ul>
      </StyledTooltip>
   );
});

const TooltipPassword = forwardRef((props, ref) => {
   const [correctLength, setCorrectLength] = useState(false);
   const [capitalAndLower, setCapitalAndLower] = useState(false);
   const [containNumber, setContainNumber] = useState(false);
   const [containSpecial, setContainSpecial] = useState(false);

   const checkPassword = () => {
      setCorrectLength(PASS_REGEX_LENGTH.test(props.password));
      setCapitalAndLower(PASS_REGEX_LETTER.test(props.password));
      setContainNumber(PASS_REGEX_DIGIT.test(props.password));
      setContainSpecial(PASS_REGEX_SPECIAL.test(props.password));
   };

   useEffect(() => {
      checkPassword();
      // eslint-disable-next-line
   }, [props.password]);

   return (
      <StyledTooltip ref={ref}>
         <h1>Password must:</h1>
         <ul>
            <li>
               {correctLength ? (
                  <FaRegCheckCircle className="correct" />
               ) : (
                  <FontAwesomeIcon
                     icon={regular('circle-xmark')}
                     className="wrong"
                  />
               )}
               <p>be atleast 10 characters long, up to 20</p>
            </li>
            <li>
               {capitalAndLower ? (
                  <FaRegCheckCircle className="correct" />
               ) : (
                  <FontAwesomeIcon
                     icon={regular('circle-xmark')}
                     className="wrong"
                  />
               )}
               <p>contain atleast one capital and lowercase letter</p>
            </li>
            <li>
               {containNumber ? (
                  <FaRegCheckCircle className="correct" />
               ) : (
                  <FontAwesomeIcon
                     icon={regular('circle-xmark')}
                     className="wrong"
                  />
               )}
               <p>contain atleast one number</p>
            </li>
            <li>
               {containSpecial ? (
                  <FaRegCheckCircle className="correct" />
               ) : (
                  <FontAwesomeIcon
                     icon={regular('circle-xmark')}
                     className="wrong"
                  />
               )}
               <p>contain one special character (@, $, !, &, etc)</p>
            </li>
            <li>
               <FaRegCheckCircle className="correct" />
               <p>can contain hyphens or undersocres ( - , _ )</p>
            </li>
         </ul>
      </StyledTooltip>
   );
});

export { TooltipName, TooltipPassword };
