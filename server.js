const express = require("express");
const log = express();
const mongoose = require("mongoose")
log.use(express.json())
require('dotenv').config();
const cors = require("cors");
const bcrypt = require("bcryptjs");
//const jsonwentoken = require("jsonwebtoken");
const jsonwebtoken = require("jsonwebtoken");



log.use(cors());
log.use(express.json());

const JWT_SECERT = "DJKGNOKLKJCOH";

//mongoDB connection
const mongoUrl = process.env.MONGODB_URL
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.error("Error connecting to database:", e));

require("./userDeatils");

//schemas imported
const User = mongoose.model("UserInfo");
const BlogPost = require('./blogPostModel');
//const Questions = require("./questionsSchema");
const pictureModel = require("./model/takePicture")
const howToBlogmodel = require("./model/howToBlog")
const trainingPagesmodel = require("./model/trainingPages")
const linkPagesmodel = require("./model/linksPages")
const textMessageModel = require("./model/textMessage")
const browseWebmodel = require("./model/trainingSchemas");
const setAlarmmodel = require("./model/setAlarm");
const VideoWatchModel = require("./model/videoWatch");
const DownloadAppmodel = require("./model/downloadApp");
const wifiHomemodel = require("./model/wifiHome");
const makeRequestModel = require("./model/makeRequest");
const AdminDetailsModel = require("./model/AdminDetails");
const AdminHomeModel = require("./model/AdminHomePage");
const FAQModel = require("./model/FAQ")
const PhoneModel = require("./model/phone")
const Message = require("./Message")
const Volunteer = require("./model/volunteerDetails")
const Points = require("./model/points");
const PostToUser = require("./model/postUser");
const VolRequests = require('./model/VolRequest')



//register post api
log.post("/register", async (req, res) => {
  const { firstName, lastName, userName, password } = req.body;

  const passencrypted = await bcrypt.hash(password, 10)

  try {
    const currentUser = await User.findOne({ userName });
    if (currentUser) {
      return res.send({ error: "Username already taken" })
    }

    await User.create({
      firstName,
      lastName,
      userName,
      password: passencrypted,
    })
    res.send({ status: "ok" })
  } catch (error) {
    res.send({ status: "error" })
  }
})

//login post api
log.post("/login-user", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      return res.json({ status: "error", error: "User not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jsonwebtoken.sign({ userName: user.userName }, JWT_SECERT);
      res.json({ status: "ok", data: token });
    } else {
      res.json({ status: "error", error: "Invalid password" });
    }
  } catch (error) {
    res.json({ status: "error", error: "Internal server error" });
  }
});

//login admin api
log.post("/loginAdmin", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const admin = await AdminDetailsModel.findOne({ userName });

    if (!admin) {
      return res.json({ status: "error", error: "admin not found" });

    }

    if (password === admin.password) {
      const token = jsonwebtoken.sign({ userName: admin.userName }, JWT_SECERT);
      res.json({ status: "ok", data: token });
    } else {
      res.json({ status: "error", error: "Invalid password" });
    }

  } catch (error) {
    res.json({ status: "error", error: "Internal server error" });
  }


})

//user data post api
log.post("/userData", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jsonwebtoken.verify(token, JWT_SECERT);
    //console.log(user)
    const uName = user.userName;
    User.findOne({ userName: uName })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    console.error("Error handling request:", error);
    res.send({ status: "error", data: error });
  }
});

//user get data api
log.get("/userDatabyuName", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send({ status: "ok", data: allUsers });
  } catch (error) {
    console.error("Error handling request:", error);
    res.send({ status: "error", data: error });
  }
});

//user get data id api
log.get("/userDataByUsername/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ userName: username });

    // if (!user) {
    //   return res.status(404).send({ status: "error", message: "User not found" });
    // }

    res.send({ status: "ok", data: user });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});

//volunteer get data id api
log.get("/volDataByUsername/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const volUser = await Volunteer.findOne({ userName: username });

    res.send({ status: "ok", data: volUser });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});

//token api
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jsonwebtoken.verify(token, JWT_SECERT);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ error: "Invalid token." });
  }
};


//creates a message API 
log.post("/msg", async (req, res) => {
  try {
    const { from, to, message } = req.body;
    const newMessage = await Message.create({
      message: message,
      Chatusers: [from, to],
      Sender: from
    })

    return res.status(200).json(newMessage)

  } catch (error) {
    return res.status(500).json("Internal Server Error")
  }
})

//send message between user api
log.get("/get/chat/msg/:user1Id/:user2Id", async (req, res) => {
  try {
    const from = req.params.user1Id;
    const to = req.params.user2Id;

    const newMessage = await Message.find({
      Chatusers: {
        $all: [from, to]
      }
    }).sort({ updatedAt: -1 });

    const allmessage = newMessage.map((msg) => {
      return {
        myself: msg.Sender.toString() === from,
        message: msg.message
      }
    })

    return res.status(200).json(allmessage);

  } catch (error) {
    return res.status(500).json("interval sever error")
  }
})

//points post api
log.post("/updatePoints", async (req, res) => {
  try {
    const { userId, points } = req.body;

    // Update points for the user
    const updatedPoints = await Points.findOneAndUpdate(
      { userId: userId },
      { $inc: { points: points } }, // Increment points
      { upsert: true, new: true }
    );

    res.json({ status: "ok", data: updatedPoints });
  } catch (error) {
    console.error("Error updating points:", error);
    res.status(500).json({ status: "error", error: error.message });
  }
});

//get user points by id api
log.get("/userPoints/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userPoints = await Points.findOne({ userId: userId });

    if (userPoints !== null && userPoints !== undefined) {
      res.json({ status: "ok", data: userPoints.points });
    } else {
      res.json({ status: "ok", data: 0 });
    }
  } catch (error) {
    console.error("Error retrieving user points:", error);
    res.status(500).json({ status: "error", message: "Failed to retrieve user points" });
  }
});

//add blog api
log.post('/add-post', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = await BlogPost.create({ title, content });
    res.json({ status: 'ok', data: newPost });
  } catch (error) {
    res.status(500).json({ status: 'error', data: error.message });
  }
});

//get blog post api
log.get('/get-blog-posts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ status: 'error', data: error.message });
  }
});

//get picture information api
log.get('/getPictureInfo', async (req, res) => {
  pictureModel.find()
    .then(picture => res.json(picture))
    .catch(err => res.json(err))
})

//get how to blog api
log.get('/getHowToBlogInfo', async (req, res) => {
  howToBlogmodel.find()
    .then(HowToBlog => res.json(HowToBlog))
    .catch(err => res.json(err))
})

//get training page information api
log.get('/getTrainingPageInfo', async (req, res) => {
  trainingPagesmodel.find()
    .then(TrainingPages => res.json(TrainingPages))
    .catch(err => res.json(err))
})

//get links api
log.get('/getLinks', async (req, res) => {
  linkPagesmodel.find()
    .then(LinksPages => res.json(LinksPages))
    .catch(err => res.json(err))
})

//post link api
log.post('/addLink', async (req, res) => {
  const { name, text, URL, imageURL } = req.body;
  const newLinkPagePost = await linkPagesmodel.create({ name, text, URL, imageURL });
  res.json({ status: 'ok', data: newLinkPagePost })
})

//get text message information api
log.get('/getTextMessage', async (req, res) => {
  textMessageModel.find()
    .then(TextMessage => res.json(TextMessage))
    .catch(err => res.json(err))
})

//get how to browse web api
log.get('/getBrowseWeb', async (req, res) => {
  browseWebmodel.find()
    .then(BrowseWeb => res.json(BrowseWeb))
    .catch(err => res.json(err))
})

//get set alaram information api
log.get('/getSetAlarm', async (req, res) => {
  setAlarmmodel.find()
    .then(SetAlarm => res.json(SetAlarm))
    .catch(err => res.json(err))
})

//get video watch information api
log.get('/getVideoWatch', async (req, res) => {
  VideoWatchModel.find()
    .then(VideoWatch => res.json(VideoWatch))
    .catch(err => res.json(err))
})

//get download app information api
log.get('/getDownloadApp', async (req, res) => {
  DownloadAppmodel.find()
    .then(DownloadApp => res.json(DownloadApp))
    .catch(err => res.json(err))
})

//get wifi connect laptop information api
log.get('/getWifiHome', async (req, res) => {
  wifiHomemodel.find()
    .then(WifiHome => res.json(WifiHome))
    .catch(err => res.json(err))
})

//post request to admin api
log.post('/addMakeRequest', async (req, res) => {
  const { title, text } = req.body;
  const newMakeRequestPost = await makeRequestModel.create({ title, text });
  res.json({ status: 'ok', data: newMakeRequestPost });
})

//get request api
log.get('/getRequest', async (req, res) => {
  makeRequestModel.find()
    .then(AdminDetails => res.json(AdminDetails))
    .catch(err => res.json(err))
})

//get admin homepage information api
log.get('/getAdminHome', async (req, res) => {
  AdminHomeModel.find()
    .then(AdminHome => res.json(AdminHome))
    .catch(err => res.json(err))
})

//add an FAQ api
log.post('/addFAQ', async (req, res) => {
  const { name, text, imageURL } = req.body;
  const addNewFAQ = await FAQModel.create({ name, text, imageURL });
  res.json({ status: 'ok', data: addNewFAQ })
})

//get an FAQ api
log.get('/getFAQ', async (req, res) => {
  FAQModel.find()
    .then(FAQ => res.json(FAQ))
    .catch(err => res.json(err))
})

//get make a phone call api
log.get('/getPhone', async (req, res) => {
  PhoneModel.find()
    .then(Phone => res.json(Phone))
    .catch(err => res.json(err))
})

//get all users api
log.get('/getAllUsers', async (req, res) => {
  User.find()
    .then(UserInfo => res.json(UserInfo))
    .catch(err => res.json(err))
})

//delete user api
log.delete('/deleteAUser/:id', async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await User.findByIdAndDelete(userId);
  if (deletedUser) {
    res.json({ status: "ok", message: "User deleted successfully" });
  }
})

//register volunteer api
log.post("/registerVolunteer", async (req, res) => {
  const { firstName, lastName, userName, password } = req.body;

  const passencrypted = await bcrypt.hash(password, 10)

  try {
    const currentUser_2 = await Volunteer.findOne({ userName });
    if (currentUser_2) {
      return res.send({ error: "Username already taken" })
    }

    await Volunteer.create({
      firstName,
      lastName,
      userName,
      password: passencrypted,
    })
    res.send({ status: "ok" })
  } catch (error) {
    res.send({ status: "error" })
  }
})

//login volunteer api
log.post("/login-volunteer", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const volunteer = await Volunteer.findOne({ userName });

    if (!volunteer) {
      return res.json({ status: "error", error: "User not found!" });
    }

    const isPasswordValid = await bcrypt.compare(password, volunteer.password);

    if (isPasswordValid) {
      const token = jsonwebtoken.sign({ userName: volunteer.userName }, JWT_SECERT);
      res.json({ status: "ok", data: token });
    } else {
      res.json({ status: "error", error: "Invalid password" });
    }
  } catch (error) {
    res.json({ status: "error", error: "Internal server error" });
  }
});

//send message to user api
log.post('/postMessageToUser', async (req, res) => {
  try {
    const { volunteerId, userId, name, text } = req.body;
    const post = new PostToUser({ volunteerId, userId, name, text });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//get message for users api
log.get('/getUserForPost', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

//get volunteer messages api
log.get('/getVolunteerForPost', async (req, res) => {
  try {
    const volunteer = await Volunteer.find();
    res.json(volunteer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

//get messages from volunteer api
log.get('/getPostbyId/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await PostToUser.find({ userId: userId });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

//get messages from user api
log.get('/getPostbyVolId/:volunteerId', async (req, res) => {
  try {
    const volunteerId = req.params.volunteerId;
    const posts = await PostToUser.find({ volunteerId: volunteerId });
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

//post request to be volunteer api
log.post('/VolRequest', async (req, res) => {
  const { name, Organisation, other, email, number, about } = req.body;
  const VolRequestPost = await VolRequests.create({ name, Organisation, other, email, number, about });
  res.json({ status: 'ok', VolRequestPost });
})

//get volunteer request api
log.get('/getVolRequest', async (req, res) => {
  VolRequests.find()
    .then(VolRequest => res.json(VolRequest))
    .catch(err => res.json(err))
})

//server connection
log.listen(5321, () => {
  console.log("Server Started")
})

/*
log.post("/post", async (req, res) => {
    console.log(req.body);
    const{data} = req.body;
    // Corrected from res.body to req.body
    //res.json({ message: "Received POST request" });

try{
    if( data =="Conor"){
        res.send({status:"ok"})
    } else{
        res.send({status:"Not Ok"})
    }
} catch(error){
    res.send({status:"Wrong"})
}


}

);
*/