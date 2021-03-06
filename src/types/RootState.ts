import { SignInState } from 'app/pages/AuthPage/Features/SignInForm/slice/types';
import { SignUpState } from 'app/pages/AuthPage/Features/SignUpForm/SignUpSlice/types';
import { AuthFormState } from 'app/pages/AuthPage/slice/types';
import { ChatState } from 'app/pages/HomePage/Features/ChatFeed/slice/types';
import { SessionState } from 'app/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/
export interface RootState {
  signIn?: SignInState;
  signUp?: SignUpState;
  authForm?: AuthFormState;
  session?: SessionState;
  chat?: ChatState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
