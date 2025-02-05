import { h } from "preact";
import style from "./style.module.scss";
import { MDXProvider } from "@mdx-js/preact";
import Posts from "./posts";
import Header from "./Header";
import TestPost from "./posts/markdownTest.mdx";
import { Link } from "preact-router";
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/preact'`.

const components = {
  em: (props) => <i {...props} />,
};


const MapPosts = () => {
  return Posts.map(post =>  (
    <div id={post.slug}>
      <Link class={style.cardLink} id={post.slug} href={"/blog/"+post.slug}>
        <div class={style.card} style={{backgroundImage:'url('+post.image+')'}}>
          <div class={style.whiteGradent}>
            <h1 class={style.cardTitles}>{post.title}</h1>
          </div>
        </div>
      </Link> 
    </div>
    )
  );
};


const Blog = (props)=> { 
  return (
    <>
    <div class={style.blog}>
       <div class={style.blogTitle}>
         <h1>Austin's Blog</h1>
         <h3><i>Adventures.</i></h3>
        </div>
      <div class={style.grid}>
        <MapPosts/>
      </div>
    </div>
    </>
  )
}

const findPost = (urlPeram) => {
  return Posts.find(({slug})=> slug === urlPeram);
}

const BlogPost = (props) => {
  return (
    <>
      <div class={style.blog}>
        <MDXProvider components={components}>
          <BlogMarkup title={findPost(props.slug).title} image={findPost(props.slug).image} postHardlink={"/blog/"+props.slug} post={findPost(props.slug).post} />
        </MDXProvider>
      </div>
    </>
  );
};

const routePosts = () =>{

}

const BlogMarkup = (props) => {
  const Post = props.post;
  return (
    <>
    <Header image={props.image} title={props.title}/>
    <div class={style.post + " " + style["markdown-body"]}>
      <Post />
    </div>
    </>
  );
};

export {Blog, BlogPost};
