import React ,{useState}from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
  } from '@chakra-ui/react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginError, loginRequest, loginSuccess } from '../../Redux/AuthReducer/action'
import { useNavigate } from 'react-router-dom'


const Login = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
        const [useremail,setUserEmail]=useState('');
        const [userpassword,setUserPassword]=useState('');
        const dispatch=useDispatch();
        const navigate=useNavigate();

        const handleLogin=()=>{
            if(useremail){
                const payload={
                    email:useremail,
                    password:userpassword
                }
            dispatch(loginRequest())
            axios.post("https://reqres.in/api/login",payload)
            .then((r)=>{
                console.log("recived data from login",r.data);
                dispatch(loginSuccess(r.data))
                navigate("/")
            }).catch((e)=>{
                dispatch(loginError());
            });
            }
        };
      
        return (
          <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader bgColor={"#10847e"} color={"white"} p={2}>
                    <img src="" alt="" />
                    <h1>Meds Ease</h1>
                </DrawerHeader>
      
                <DrawerBody id='loginsection' >
                    <h3 style={{color:"#10847e",marginLeft:"10px"}}>Quick Login /Register</h3>
                  <Input
                  type="email"
                  placeholder='email'
                  value={useremail}
                  onChange={(e)=>setUserEmail(e.target.value)}
                  m="2"
                  />
                  <Input type="password"
                  placeholder='Enter your password'
                  value={userpassword}
                  onChange={(e)=>setUserPassword(e.target.value)}
                  m="2"/>
                <Button colorScheme='blue' bgColor={"#10847e"}
                onClick={handleLogin}
                m="2">Login</Button>
                </DrawerBody>

                {/* login */}
                <DrawerBody id="otp">

                </DrawerBody>
      
                <DrawerFooter>
                  <h4>By clicking Login, you agree with our <a href='https://pharmeasy.in/legal/privacy-policy' ><h4 style={{color:"#10847e"}}>Privacy Policy</h4></a></h4>                
                  
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
      }


export default Login