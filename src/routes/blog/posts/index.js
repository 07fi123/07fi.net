
import TestPost from "./markdownTest.mdx";
import HelloWorld from './helloWorld.mdx'
import LunarlyAnylitics from './LunarlyAnylitics.mdx'





const posts = () => {
    return [
        {
            "title": "The Best blog ever!",
            "slug": "best-blog-ever",
            "post": TestPost,
            "image":"https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        },
        {
            "title": "Hello World!",
            "slug": "hello-world",
            "post": HelloWorld,
            "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
            "title": "The Tricky thing about Anylitics",
            "slug": "tricky-analiitics",
            "post": LunarlyAnylitics,
            "image": "https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        },
    ]; 
}

const Posts = posts()

export default Posts;