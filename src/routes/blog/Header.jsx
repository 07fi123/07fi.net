import { h } from "preact";
import style from "./style.module.scss";
import mugwebP from "../../assets/mug.webp";
import mugwJPG from "../../assets/mug.jpeg";
import {Share} from "../../components/share";

const Header = ({title,image}) => {
    return (
      <>
    <div class={style.header} style={{backgroundImage:'url('+image+')'}}>
      <div class={style.whiteGradent} >
        <h1 class={style.title}>{title}</h1>
        <div class={style.column}>
        <picture class={style.profile}>
          <source srcset={mugwebP} type="image/webp" />
          <source srcset={mugwJPG} type="image/jpeg" />
          <img class={style.profile} src={mugwJPG} alt="profile-image" />
        </picture>
        <h2 class={style.author}>Austin Geisert</h2>
        </div>
        </div>
    </div>
    {/* <div class={style.column}>
          <a class={style.socials} href="/blog">← Back to Blog</a>
          <Share class={style.socials} link={window.location.href}/>
    </div> */}
    </>
    )
}


export default Header;