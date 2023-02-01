import React, { useState, useRef } from "react";
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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  loginError,
  loginRequest,
  loginSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "../../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import { Text } from "recharts";
const initialState = { name: "", email: "", password: "", mob: "" };
const initailError = { name: false, email: false, password: false, mob: false };
const Login = () => {
  const btnRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userdata, setUserdata] = useState(initialState);
  const [isError, setError] = useState(initailError);
  const { name, email, password, mob } = userdata;
  const [islogin, setLogin] = useState(true);
  const toast = useToast();
  // const [isloading, setloading] = useState(false);

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
    if(value) setError({...isError,[name]:false})
   else setError({...isError,[name]:true})
  };
  const handleLogin = () => {
    if (email && !isError.email && !isError.password) {
      const payload = {
        email: email,
        password: password,
      };
      dispatch(loginRequest());
      axios
        .post("https://pharmaeasy.onrender.com/user/login", payload)
        .then((r) => {
          console.log("recived data from login", r.data);
          dispatch(loginSuccess(r.data));
          toast({
            title: 'Login Successfully',
            description: "Welcome to the MedsEase",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top'
          })
          navigate("/");
          onClose();
        })
        .catch((e) => {
          dispatch(loginError());
          toast({
            title: 'Wrong Credentials',
            description: "Please enter your right credentials",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top'
          })
        });
    }
  };

  const checkInput = () => {
    setError({
      ...isError,
      name: userdata.name === "",
      password: userdata.password === "",
      email: userdata.email === "",
      mob: userdata.mob === "",
    });

    if (islogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };
  const handleRegister = async() => {
    if (
      !isError.name &&
      !isError.email &&
      !isError.password &&
      !isError.mob &&
      name &&
      email &&
      password &&
      mob
    ) {
      dispatch(registerRequest());
      try { const res = await axios.post("https://pharmaeasy.onrender.com/user/register", userdata);
       if( res.data.error!=="already"){
          // dispatch(registerSuccess(res.data));
          setError(initailError);
          setLogin(true);
          setUserdata(initialState);
          onClose();
          toast({
            title: 'Register Successfully',
            description: "Please Login",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top'
          })
        }
       else {
        toast({
          title: ' Already Registered',
          description: "Please Login",
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top'
        })
        }

      } catch (errr) {
        dispatch(registerError())
        console.log(errr)
      };
    }
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="black"
        _hover="none"
        fontWeight="500"
        width="fit-content"
        fontSize={"14px"}
        colorScheme="gray"
      >
       Log In / Register
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            onClick={() => {
              setError(initailError);
              setUserdata(initialState);
            }}
          />
          <DrawerHeader bgColor={"#10847e"} color={"white"} p={2}>
            <img src="" alt="" />
            <h1>Meds Ease</h1>
          </DrawerHeader>

          <DrawerBody id="loginsection">
            <h3 style={{ color: "#10847e", marginLeft: "10px" }}>Quick<span
                onClick={() => {
                  setError(initailError);
                  setLogin(true);
                }}
                style={{ pointer: "cursor",marginLeft:"2px" }}
              >
                Login
              </span>
              /
              <span
                onClick={() => {
                  setError(initailError);
                  setLogin(false);
                }}
                style={{ pointer: "cursor" }}
              >
                Register
              </span>
            </h3>
            {!islogin && (
              <>
                <Input
                  type="name"
                  placeholder="Enter your  Full Name"
                  value={name}
                  name="name"
                  onChange={(e) => handleUserData(e)}
                  m="2"
                />
                {isError.name && (
                  <Text as="h5" style={{ color: "red" }}>
                    Please Enter Your Name
                  </Text>
                )}
              </>
            )}
            <Input
              type="email"
              placeholder="Enter your Email"
              value={email}
              name="email"
              onChange={(e) => handleUserData(e)}
              m="2"
            />
            {isError.email && (
              <Text as="h5" style={{ color: "red" }}>
                Please Enter Your Email
              </Text>
            )}
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => handleUserData(e)}
              m="2"
            />
            {isError.password && (
              <Text as="h5" style={{ color: "red" }}>
                Please Enter Your Password
              </Text>
            )}
            {!islogin && (
              <>
                <Input
                  type="tel"
                  name="mob"
                  placeholder="Enter your number"
                  value={mob}
                  onChange={(e) => handleUserData(e)}
                  m="2"
                />
                {isError.mob && (
                  <Text as="h5" style={{ color: "red" }}>
                    Please Enter Your Number
                  </Text>
                )}
              </>
            )}
            <Button
              colorScheme="blue"
              bgColor={"#10847e"}
              onClick={checkInput}
              m="2"
            >
              {islogin ? "Login" : "Register"}
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <h4>
              By clicking Login / Register, you agree with our
              <a href="https://pharmeasy.in/legal/privacy-policy">
                <h4 style={{ color: "#10847e" }}>Privacy Policy</h4>
              </a>
            </h4>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Login;
