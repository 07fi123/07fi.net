import { h } from 'preact';
import style from './style.module.scss';
import {MDXProvider} from '@mdx-js/preact'
import Post from './helloWorld.mdx'
// ^-- Assumes an integration is used to compile MDX to JS, such as
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/preact'`.

const components = {
  em: props => <i {...props} />
}
export const Blog = () => {
    return (
    <>
    <MDXProvider components={components}>
      <div>Blog</div>
        <Post class={style.post}/>
    </MDXProvider>
    </>
    )
}


export default Blog;