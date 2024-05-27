import Link from 'next/link'

export default function ActiveLink({ href, children,  activeTab, setActiveTab }) {
  return (
    <Link href={href} onClick={()=>{setActiveTab(href)}} className={activeTab === href ?"header-link active" : "header-link"}>{children}</Link>
  )
}
