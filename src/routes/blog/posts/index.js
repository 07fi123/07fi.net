
import TestPost from "./markdownTest.mdx";
import HelloWorld from './helloWorld.mdx'
import LunarlyAnylitics from './LunarlyAnylitics.mdx'
import SpiritualReflection from './SpritualReflection.mdx'
import AcademicReflection from './AcademicReflection.mdx'
import CoCorriculars from './CoCorriculars.mdx'
import RelatedActivites from './RelatedActivities.mdx' 
import AssignmentArtifacts from './AssignmentArtifacts.mdx'
import roadImage from './photos/patrick-tomasso-5hvn-2WW6rY-unsplash.jpg'
import salthand from './photos/saltHand.png'



const posts = () => {
    return [
        {
            "title": "Assignment Artifacts",
            "slug":"assignment-reflection",
            "post": AssignmentArtifacts,
            "image":"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
            "title": "Related Artifacts",
            "slug":"related-reflection",
            "post": RelatedActivites,
            "image":salthand,
        },
        {
            "title": "Co Curricular Artifacts",
            "slug": "cocorriculars-reflection",
            "post": CoCorriculars,
            "image":"https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        },
        {
            "title": "Academic Reflection",
            "slug":"academic-reflection",
            "post": AcademicReflection,
            "image":roadImage,
        },
        {
            "title": "Spiritual Reflection",
            "slug": "spiritual-reflection",
            "post": SpiritualReflection,
            "image":"https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        },
        // {
        //     "title": "The Best blog ever!",
        //     "slug": "best-blog-ever",
        //     "post": TestPost,
        //     "image":"https://images.unsplash.com/photo-1473221326025-9183b464bb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        // },
        // {
        //     "title": "Hello World!",
        //     "slug": "hello-world",
        //     "post": HelloWorld,
        //     "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        // },
        // {
        //     "title": "The Tricky thing about Anylitics",
        //     "slug": "tricky-analiitics",
        //     "post": LunarlyAnylitics,
        //     "image": "https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        // },
        
    ]; 
}

const Posts = posts()

export default Posts;