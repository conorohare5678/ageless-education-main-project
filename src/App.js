import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Homepage from "./pages/homepage";
import Aboutus from "./pages/aboutus";
import Social from "./pages/Social";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Signup_help from "./pages/Signup_help";
import ProfilePage from "./pages/profilepage";
import Learning_page_one from "./pages/Teaching/learning_page_1";
import Support from "./pages/support";
import How_to_blog from "./pages/Teaching/How_to_blog";
import { Route, Routes } from "react-router-dom"
import ChatPage from "./pages/ChatApp/chatPage";
import ConnectWifi from "./pages/Teaching/how_to_connect_wifi";
import Blog from "./pages/blogPage";
import ConWifi from "./pages/Teaching/how_to_con_wifi";
import TakePicture from "./pages/Teaching/how_to_take_picture";
import PopUpOne from "./components/popups/popUpOne";
import How_to_sendMes from "./pages/Teaching/how_to_send_message";
import TrainingHomPage from "./pages/trainingHomepage/trainingHompage";
import LinkPage from "./pages/linksPage";
import HowSendText from "./pages/Teaching/how_send_text_message";
import HowToBroswe from "./pages/Teaching/how_to_browse";
import SetAlarm from "./pages/Teaching/how_to_set_alarm";
import WatchVideo from "./pages/Teaching/watch_video";
import DownloadApp from "./pages/Teaching/How_To_download";
import QuizHomepage from "./pages/trainingHomepage/QuizHomepage";
import Quiz_One from "./components/Quiz/Quiz_One";
import Quiz_Two from "./components/Quiz/Quiz_Two";
import Quiz_Three from "./components/Quiz/Quiz_Three";
import MakeRequest from "./pages/trainingHomepage/makeRequestPage";
import AdminHomepage from "./pages/Admin/AdminHomepage";
import AdminLogin from "./pages/Admin/AdminLogin";
import EmailAdmin from "./pages/emailAdmin";
import AdminRequest from "./pages/Admin/AdminRequestsPage";
import AdminAddUser from "./pages/Admin/AdminAddUser";
import AdminFAQ from "./pages/Admin/AdminPost/AdminPostFAQ";
import FaqPage from "./pages/FAQPage";
import AdminPost from "./pages/Admin/AdminPost/AdminPost";
import AdminDeleteUser from "./pages/Admin/AdminPost/AdminDelete";
import TrainingHomPageSingle from "./pages/trainingHomepage/trainingHomepageSingle";
import AddVolunteer from "./pages/Admin/AdminAddVol";
import VolunteerLogin from "./pages/volunteer/loginVolunteer";
import VolunteerHome from "./pages/volunteer/volunteerHome";
import VolunteerInterestPage from "./pages/VolunteerInterest";
import LoginHub from "./pages/loginHub";
import SendMessageUser from "./pages/volunteer/sendUserMess";
import MessageFromVol from "./pages/messageFromVol";
import MessageToVol from "./pages/MessageToVol";
import MessageFromUser from "./pages/volunteer/messagesFromUser";
import MessageHome from "./pages/trainingHomepage/messageHomePage";
import AdminVolRequest from "./pages/Admin/AdminVolReqPage";


function App() {


  return (

    <>
      <Navbar />
      <div className="container">
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Support" element={<Support />} />

        </Routes>
        <Routes>

          <Route path="/Signup" element={<Signup />} />
          <Route path='/Signup_help' element={<Signup_help />}></Route>
          <Route path='/ProfilePage' element={<ProfilePage />} />
          <Route path='/Learning_page_one' element={<Learning_page_one />}></Route>
          <Route path='/ConnectWifi' element={<ConnectWifi />}></Route>
          <Route path='/How_to_blog' element={<How_to_blog />}></Route>
          <Route path='/chatPage' element={<ChatPage />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/ConWifi' element={<ConWifi />}></Route>
          <Route path='/takePicture' element={<TakePicture />}></Route>
          <Route path="/popupone" element={<PopUpOne />}></Route>
          <Route path="/Messagesend" element={<How_to_sendMes />}></Route>
          <Route path="/TrainHomepage" element={<TrainingHomPage />}></Route>
          <Route path="/LinkPage" element={<LinkPage />}></Route>
          <Route path="/HowSendText" element={<HowSendText />}></Route>
          <Route path="/HowToBroswe" element={<HowToBroswe />}></Route>
          <Route path="/SetAlarm" element={<SetAlarm />}></Route>
          <Route path="/DownloadApp" element={<DownloadApp />}></Route>
          <Route path="/WatchVideo" element={<WatchVideo />}></Route>
          <Route path="/QuizHomepage" element={<QuizHomepage />}></Route>
          <Route path='/QuizOne' element={<Quiz_One />}></Route>
          <Route path='/QuizTwo' element={<Quiz_Two />}></Route>
          <Route path='/QuizThree' element={<Quiz_Three />}></Route>
          <Route path="/MakeRequest" element={<MakeRequest />}></Route>
          <Route path="/AdminHomepage" element={<AdminHomepage />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route path="/EmailAdmin" element={<EmailAdmin />}></Route>
          <Route path="/AdminRequest" element={<AdminRequest />}></Route>
          <Route path="/AdminAddUser" element={<AdminAddUser />}></Route>
          <Route path="/AdminFAQ" element={<AdminFAQ />}></Route>
          <Route path="/FAQPage" element={<FaqPage />}></Route>
          <Route path="/AdminPostLink" element={<AdminPost />}></Route>
          <Route path="/DeleteUser" element={<AdminDeleteUser />}></Route>
          <Route path="/TrainingHomeSing" element={<TrainingHomPageSingle />}></Route>
          <Route path="/AddVolunteer" element={<AddVolunteer />}></Route>
          <Route path="/VolunteerLogin" element={<VolunteerLogin />}></Route>
          <Route path="/HomepageVolunteer" element={<VolunteerHome />}></Route>
          <Route path="/VolunteerInterest" element={<VolunteerInterestPage />}></Route>
          <Route path="/Hub" element={<LoginHub />}></Route>
          <Route path="/SendMessageUser" element={<SendMessageUser />}></Route>
          <Route path="/MessageFromVol" element={<MessageFromVol />}></Route>
          <Route path="/MessageVol" element={<MessageToVol />}></Route>
          <Route path="/MessagesFromUser" element={<MessageFromUser />}></Route>
          <Route path="/MessageHome" element={<MessageHome />}></Route>
          <Route path="/AdminVolRequest" element={<AdminVolRequest />}></Route>

        </Routes>

      </div>
    </>

  )

}


export default App;

