import Test from './Test.mdx'
import ToggleTheme from './ToggleTheme'
export default function Page(){
  return (
  <div className='prose prose-red dark:prose-invert'><Test/>
  <ToggleTheme/>
  </div>
  )
}
