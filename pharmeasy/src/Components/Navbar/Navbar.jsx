import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import Pincode from "../PincodeDrawer/Pincode";
import logo from "../../Assets/logo192.png";
import Login from "../Login/Login";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { logOutSuccess } from "../../Redux/AuthReducer/action";

const Navbar = () => {
  const dispatch = useDispatch();
  // const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const { isAuth, user } = useSelector((a) => {
    return { isAuth: a.AuthReducer.isAuth, user: a.AuthReducer.user };
  }, shallowEqual);
  useEffect(() => {
    if (!isAuth) {
      localStorage.clear();
      console.log("clear user");
    }
  }, [isAuth]);
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
        borderBottom: "2px solid #dfdfdf",
        height: "72px",
      }}
    >
      <div className={styles.navbar}>
        <GiHamburgerMenu className={styles.ham} />
        <div className={styles.imageDiv}>
          <img
            style={{ cursor: "pointer" }}
            onClick={handleClick}
            src={logo}
            alt="Home logo"
          />
        </div>
        <div className={styles.LinkDiv}>
          {/* <div style={{ display: "flex", alignItems: "center" }}> */}
          <Pincode />
          {/* <MdKeyboardArrowDown className={styles.downArrowIcon} /> */}
          {/* </div> */}
          <div className={styles.links2}>
            <div className={styles.download}>
              <Link to="https://apps.apple.com/IN/app/id982432643?mt=8">
                <Button backgroundColor={"#EEF4FE"} fontSize="14px">
                  <AiOutlineMobile
                    style={{ fontSize: "25px", marginRight: "10px" }}
                  />
                  Download App
                </Button>
              </Link>
            </div>
            <div className={`${styles.links2Icons} ${styles.login}`}>
              {!isAuth ? (
                <>
                  <HiOutlineUser
                    style={{ fontSize: "20px", marginRight: "0px" }}
                  />
                  <Login />
                </>
              ) : (
                <>
                  <Text as="p" className={styles.user}>
                    {user.name}
                  </Text>
                  <Button
                    onClick={() => dispatch(logOutSuccess())}
                    className={styles.logOut}
                    colorScheme={"teal"}
                  >
                    <AiOutlineLogout />
                    LogOut
                  </Button>
                </>
              )}
            </div>
            <div className={styles.links2Icons}>
              <TbDiscount2 style={{ fontSize: "20px", marginRight: "10px" }} />
              <Link to="/offer" style={{ fontSize: "14px", fontWeight: "500" }}>
                Offers
              </Link>
            </div>
            <div className={styles.links2Icons}>
              <BsCart2 style={{ fontSize: "20px", marginRight: "10px" }} />
              <Link to="/cart" style={{ fontSize: "14px", fontWeight: "500" }}>
                Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
