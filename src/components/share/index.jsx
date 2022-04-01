import { useState } from "preact/hooks";
import { animated, useSpring } from '@react-spring/web'
import style from "./style.module.scss";
//could refactor this into a state machine

export const Share = ( props ) => {
  const [toggle, setToggle] = useState(false);

  const toggleSwitch = () => setToggle(!toggle);
  

    
  return (
    <>
      <button class={props.class} onClick={toggleSwitch}>Share</button>
      <FadeIn isVisible={toggle}>
        <ShareDrawer hide={toggleSwitch} link={props.link}/>
      </FadeIn>
        
    </>
  );
};

const FadeIn = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    position: 'fixed',
    bottom: "0px",
    width: "100%",
    'z-index':1000,
    left: "0px",
  })


  return <animated.div style={styles}>{children}</animated.div>
}

const ShareDrawer = (props) => {
  const [didCopy, setDidCopy] = useState(false);

  
  return (
    <div class={style.shareDrawer}>
      <button class={style.exit} onClick={() => props.hide()}>✗</button>
      <div class={style.alignedContent}>
      <h2>
        {!didCopy && 
        <><button class={style.blueLink} onClick={() => copyTo(props.link,setDidCopy,props.hide)}>Click here</button>to share this with other cool people 😎!</>
        }
        {didCopy && 'Copied to clipboard! 👍'}
      </h2>
      </div>
    </div>
  );
};


const copyTo = async (link,copy,hide) => {
    await navigator.clipboard.writeText(link);
    copy(true);
    await setTimeout(() => {
      hide();
    }
    , 1500);

    await setTimeout(() => {
      copy(false)
    },2000)
  };

  