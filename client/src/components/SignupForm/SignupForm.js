import { useState, useRef, useEffect } from 'react';

// components / styled-components
import { SectionContainer } from '../styles/SectionContainer.styled';
import {
   StyledSignupForm,
   SignupButton,
   LoginLink,
   ErrorMessage,
} from './SignupForm.styled';
import useSignup from '../../hooks/useSignup';
import { TooltipName, TooltipPassword } from './Tooltip';

// icons
import { FaEye, FaEyeSlash, FaRegQuestionCircle } from 'react-icons/fa';

// route
import ROUTES from '../../routes/routes';

// Regex
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.*\d).{10,20}$/;
const NAME_REGEX = /^[A-Z].{5,32}$/;

const SignupForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
   });
   const { signUp, error, setError } = useSignup();
   const { name, email, password, confirmPassword } = formData;
   const [showPassword, setShowPassword] = useState(false);
   const [correctPassword, setCorrectPassword] = useState(false);
   const [correctName, setCorrectName] = useState(false);
   // reference
   const passwordRef = useRef(null);
   const nameRef = useRef(null);
   const confirmPasswordRef = useRef(null);
   const nameInfoRef = useRef(null);
   const passInfoRef = useRef(null);
   const tooltipNameRef = useRef(null);
   const tooltipPassRef = useRef(null);

   const handleSubmit = async e => {
      e.preventDefault();

      if (!name || !email || !password || !confirmPassword) {
         setError('Please fill all fields');
      } else if (!correctName) {
         setError(`Invalid Name syntax`);
      } else if (!correctPassword) {
         setError(`Invalid password syntax`);
      } else if (password !== confirmPassword) {
         setError(`Passwords doesn't match`);
      } else await signUp(name, email, password);
   };

   const handleKeyUp = e => {
      if (e.key === 'Enter') {
         handleSubmit(e);
      }

      if (nameRef.current.contains(e.target)) {
         setCorrectName(NAME_REGEX.test(e.target.value));
         if (NAME_REGEX.test(e.target.value)) {
            nameInfoRef.current.style.color = '#38e329';
         } else {
            nameInfoRef.current.style.color = '#ff160a';
         }
      }

      if (passwordRef.current.contains(e.target)) {
         setCorrectPassword(PASSWORD_REGEX.test(e.target.value));
         if (PASSWORD_REGEX.test(e.target.value)) {
            passInfoRef.current.style.color = '#38e329';
         } else {
            passInfoRef.current.style.color = '#ff160a';
         }
      }
   };

   const handleChange = e => {
      setFormData(prev => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));

      setError(null);
   };

   const handlePointerDown = e => {
      e.preventDefault();
      setShowPassword(true);
      passwordRef.current.type = 'text';
      confirmPasswordRef.current.type = 'text';
   };

   const handlePointerUp = e => {
      e.preventDefault();
      setShowPassword(false);
      passwordRef.current.type = 'password';
      confirmPasswordRef.current.type = 'password';
   };

   const handlePointerOver = e => {
      if (nameInfoRef.current.contains(e.target)) {
         tooltipNameRef.current.style.display = 'flex';
      }
      if (passInfoRef.current.contains(e.target)) {
         tooltipPassRef.current.style.display = 'flex';
      }
   };

   const handlePointerOut = e => {
      tooltipNameRef.current.style.display = 'none';
      tooltipPassRef.current.style.display = 'none';
   };

   useEffect(() => {
      if (showPassword) {
         window.addEventListener('pointerup', handlePointerUp);
      } else {
         window.removeEventListener('pointerup', handlePointerUp);
      }

      return () => window.removeEventListener('pointerup', handlePointerUp);
   }, [showPassword, setShowPassword]);

   return (
      <SectionContainer>
         <StyledSignupForm
            onSubmit={handleSubmit}
            error={error}
            showPassword={showPassword}
         >
            <h1>Welcome</h1>
            <div className="input-group">
               <div className="label-wrapper">
                  <label htmlFor="name">Name</label>
                  <div className="validation">
                     <span ref={nameInfoRef}>
                        <FaRegQuestionCircle
                           onPointerOver={handlePointerOver}
                           onPointerOut={handlePointerOut}
                        />
                     </span>
                     <TooltipName name={name} ref={tooltipNameRef} />
                  </div>
               </div>
               <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane"
                  value={name}
                  onChange={handleChange}
                  onKeyUp={handleKeyUp}
                  ref={nameRef}
                  autoFocus
               ></input>
            </div>
            <div className="input-group">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={handleChange}
               ></input>
            </div>
            <div className="input-group">
               <div className="label-wrapper">
                  <label htmlFor="password">Password</label>
                  <div className="validation">
                     <span ref={passInfoRef}>
                        <FaRegQuestionCircle
                           onPointerOver={handlePointerOver}
                           onPointerOut={handlePointerOut}
                        />
                     </span>
                     <TooltipPassword
                        password={password}
                        ref={tooltipPassRef}
                     />
                  </div>
               </div>
               <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  onKeyUp={handleKeyUp}
                  ref={passwordRef}
               ></input>
            </div>
            <div className="input-group">
               <label htmlFor="confirmPassword">Confirm Password</label>
               <div>
                  <input
                     type="password"
                     name="confirmPassword"
                     id="confirmPassword"
                     value={confirmPassword}
                     onChange={handleChange}
                     ref={confirmPasswordRef}
                  ></input>
                  <button
                     onClick={e => e.preventDefault()}
                     onPointerDown={handlePointerDown}
                     onPointerUp={handlePointerUp}
                  >
                     {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
               </div>
            </div>
            <SignupButton>Sign Up</SignupButton>
            <div className="err-msg-container">
               {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
            <LoginLink>
               <p>
                  Have an account?
                  <a href={`${ROUTES.LOGIN}`}>&#10094;Log in here&#10095;</a>
               </p>
            </LoginLink>
         </StyledSignupForm>
      </SectionContainer>
   );
};

export default SignupForm;
