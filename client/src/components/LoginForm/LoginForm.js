import { useState, useRef, useEffect } from 'react';

// components / styled-components
import { SectionContainer } from '../styles/SectionContainer.styled';
import {
   AnimatedBorder,
   StyledLoginForm,
   LoginButton,
   ErrorMessage,
   RegisterLink,
} from './LoginForm.styled';
import ThemeButton from '../theme/ThemeButton';

// hooks
import useLogin from '../../hooks/useLogin';

// icons
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// route
import ROUTES from '../../routes/routes';

const LoginForm = () => {
   const [formData, setFormData] = useState({
      email: '',
      password: '',
   });
   const { login, error, setError } = useLogin();
   const { email, password } = formData;
   const [showPassword, setShowPassword] = useState(false);
   const passwordInput = useRef(null);

   const handleSubmit = async e => {
      e.preventDefault();

      await login(email, password);
   };

   const handleKeyUp = e => {
      if (e.key === 'Enter') {
         handleSubmit(e);
      }
   };

   const getFormData = e => {
      setFormData(prev => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
      setError(null);
   };

   const handlePointerDown = e => {
      e.preventDefault();
      setShowPassword(true);
      passwordInput.current.type = 'text';
   };

   const handlePointerUp = e => {
      e.preventDefault();
      setShowPassword(false);
      passwordInput.current.type = 'password';
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
         <ThemeButton />
         <AnimatedBorder error={error}>
            <StyledLoginForm
               onSubmit={handleSubmit}
               onKeyUp={handleKeyUp}
               error={error}
               showPassword={showPassword}
            >
               <h1>Chilly talk 🤗</h1>
               <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     value={email}
                     onChange={getFormData}
                     autoFocus
                  ></input>
               </div>
               <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <div>
                     <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={getFormData}
                        ref={passwordInput}
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
               <LoginButton>Log In</LoginButton>
               <div className="err-msg-container">
                  {error && <ErrorMessage>{error}</ErrorMessage>}
               </div>
               <RegisterLink>
                  <p>
                     New here?
                     <a href={`${ROUTES.SIGNUP}`}>
                        &#10094;Create account for free&#10095;
                     </a>
                  </p>
               </RegisterLink>
            </StyledLoginForm>
         </AnimatedBorder>
      </SectionContainer>
   );
};

export default LoginForm;
