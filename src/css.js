
const string =`
.skin* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.skin*::after, .skin*::before {
  box-sizing: border-box;
}
.html{
  background: #ffe600;
  min-height: 50vh;
}

.skin  {
  position: relative;
  left: 50%;
  top: 200px;
  
}
@keyframes wave {
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate( 5deg);
  }
  66%{
    transform: rotate( -5deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.skin .nose{
  position: absolute;

}
.skin .nose:hover{
  transform-origin: 50% 100%;   /*50%是中心 100%是最下面*/
  animation: wave 200ms  infinite linear;
}
.skin .nose .triangle {
  border: 10px solid;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  margin-left: -10px;
}
.skin .nose .oval {
  width: 20px;
  height: 8px;
  position: absolute;
  top: -5px;
  border-radius: 50%;
  background-color: black;
  margin-left: -10px;
}
.skin .eyes {
  width: 56px;
  height: 56px;

  border-radius: 50%;
}
.skin .eyes.left {
  position: absolute;
  left: -150px;
  margin-right: -28px;
  top:-25px;
  background-color: #2e2e2e;
}
.skin .eyes.right {
  position: absolute;
  left: 150px;
  margin-left: -56px;
  top:-25px;
  background-color: #2e2e2e;
}
.skin .eyes::after{
  content:'';
  display: block;
  border: 1px solid #2e2e2e;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-left: -18px;
  top: 2px;
}


.skin .mouth .right{
  width:100px;
  height:40px;
  border: 3px solid black;
  border-radius: 50%;
  border-left-color: transparent;
  border-top-color: transparent;
  transform: rotate(15deg);
  position:absolute;
  left: -9px;
  top:25px;
  background: #ffe600;
  z-index: 1;
}
.skin .mouth .left{
  width:100px;
  height:40px;
  border: 3px solid black;
  border-radius: 50%;
  border-right-color: transparent;
  border-top-color: transparent;
  transform: rotate(-15deg);
  position:absolute;
  left:-92px;
  top: 25px;
  z-index: 1;
  background: #ffe600;
}

.skin .mouth .right::after{
  content:'';
  display: block;
  width:30px;
  height:15px;

  background-color: #ffe600;
  position: absolute;
  left:80px;
}

.skin .mouth .left::after{
  content:'';
  display: block;
  width:30px;
  height:15px;

  background-color: #ffe600;
  position: absolute;
  left:-20px;
}
.skin .tongue{
  width: 200px;
  height:220px;
  position: absolute;
  left: -100px;
  top:43px;
  overflow: hidden;

}
.skin .tongue .up{
  width: 180px;
  height: 1000px;
  border: 4px solid black;
  background: #9b000a;
  position: absolute;
  bottom: 30px;
  border-radius: 50%/50%;
  left: 50%;
  margin-left: -90px;
  overflow: hidden;
}
.skin .tongue .up .bottom{
  width: 120px;
  height: 200px;
  border: 2px solid red;
  position: absolute;
  left: 50%;
  margin-left: -60px;
  bottom: -50px;
  border-radius: 90%/40%;
  background: #ff485f;
}
.skin .face{
  width:90px;
  height:90px;
  border: 3px solid black;
  border-radius: 50%;
  left:50%;
  margin-left: -45px;
  background: #ff0000;
}
.face > img{

  position: absolute;
  top:50%;
  left:50%;
}
.face.left > img{
  transform-origin: 0 0;
  transform: rotateY(180deg);
}
.skin .face.left{

  transform: translate(-180px,90px);

}
.skin .face.right{
  transform: translateX(180px);
}

`
export default string;