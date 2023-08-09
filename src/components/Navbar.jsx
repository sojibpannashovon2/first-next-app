import Link from "next/link";


const navLink = [

    {
        path: '/',
        title: "Home"
    },
    {
        path: '/blogs',
        title: "Blogs"
    },
    {
        path: '/about',
        title: "About"
    },
    {
        path: '/profile',
        title: "profile"
    },
    {
        path: '/dashboard/add-cart',
        title: "Add-Cart"
    },
]
const Navbar = () => {
    return (
        <nav className="flex justify-between mx-6 bg-slate-400 p-4 rounded-lg">
            <h1 className='text-2xl font-bold'>Next Hero</h1>
            <ul className="flex justify-between gap-8">
                {
                    navLink.map(({ path, title }) => (<li key={path}>
                        <Link className="font-bold" href={path}>{title}</Link>   
                    </li>))
              }  
            </ul>
            
        </nav>
    );
};

export default Navbar;